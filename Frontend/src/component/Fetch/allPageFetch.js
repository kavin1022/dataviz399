
const allPageFetch = async(date, 
    setSleepLoading, setActivLoading,
    setDistanceValue, setExerciseValue, setCaloriesValue, setRingLabel, setRingData, setRunTime, setWalkTime, setTotalCalories, setBarLabel, setBarData, setStepValue, 
    setTimeInBed, setWentToSleep, setEfficiency, setwakeUp, setSleepStagesData, setSleepLineData, setSleepLineLabel,
    ) => {

    const activitiesUpdate = async() => {
        const update = (arr) => {
            let sum = 0;
            for (let i=0; i<arr.length; i++){
                if (arr[i].dateTime.substring(0,10) == date){
                    sum += arr[i].value;
                }
            }
            return sum;
        }
        /* Updating featured info */
        setStepValue(update(await stepPromise));
        setDistanceValue(Math.round(update(await disPromise) * 100)/100);
        setExerciseValue(Math.round(update(await exerDurPromise) * 100)/100);
        setCaloriesValue(Math.round(update(await caloriesPromise) * 100)/100);

        /* Updating ring chart */
        const exerList = await exerDurPromise;

        let total = Array.from(exerList.reduce((m, {activityName, value}) => 
        m.set(activityName, (m.get(activityName) || 0) + value), new Map),
        ([activityName, value]) => ({activityName, value}));

        let totalButCalories = Array.from(exerList.reduce((m, {activityName, calories}) => 
        m.set(activityName, (m.get(activityName) || 0) + calories), new Map),
        ([activityName, calories]) => ({activityName, calories}));

        if (exerList.length !== 0){
            /* For Ring Chart */
            let tempRingLabel = [];
            let tempRingData = total.map(x => 0);
            let tempRunTime = 0;
            let tempWalkTime = 0;
            total.map(x => {
                tempRingLabel.push(x.activityName);
                tempRingData[tempRingLabel.indexOf(x.activityName)] += x.value;
                if(x.activityName === "Walk"){tempWalkTime += x.value}
                else{
                    tempRunTime += x.value;
                }
            })
            setRingLabel(tempRingLabel);
            setRingData(tempRingData);
            setWalkTime(tempWalkTime);
            setRunTime(tempRunTime);

            /* For Bar Graph */
            let tempBarData = [0, 0];
            let tempTotalCalories = 0;
            totalButCalories.map(x => {
                if(x.activityName == "Walk"){tempBarData[0] += x.calories;}
                else{tempBarData[1] += x.calories};
                tempTotalCalories += x.calories;
            })
            setTotalCalories(tempTotalCalories);
            setBarData(tempBarData);
        }else{
            setRingData([100]);
            setRingLabel(["None"]);
            setTotalCalories(0);
            setBarData([0, 0]);
            setWalkTime(0);
            setRunTime(0);
        }
        setActivLoading(false);
        console.log("activ loading finished")
    }

    const sleepUpdate = async() => {
        const parseDuration = (data) => {
            for(let i = 0; i < data.length; i++){
                if (data[i].dateTime === date){
    
                    //Convert single digit to double digit (e.g. 6 => 06)
                    //Set time in bed (e.g. 06:12)
                    setTimeInBed(`${(Math.round(data[i].duration)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${Math.round(data[i].duration / 10 * 60)}`);
                    setWentToSleep(data[i].startTime.substring(data[i].startTime.length - 8, data[i].startTime.length-3));
                    setEfficiency(data[i].efficiency)
                    setwakeUp(data[i].endTime.substring(data[i].endTime.length - 12, data[i].endTime.length-7));
    
                    //Set ringdata
                    let tempRingData = [];
                    for (const [key, value] of Object.entries(data[i].levels)) {
                        tempRingData.push(value.minutes);
                    }
                    setSleepStagesData(tempRingData);
    
                    return i;
                }
            }
        }
        let sleepInfo = await durationPromise
        let dateIndex = parseDuration(sleepInfo);

        let tempData = [];
        let tempLabel = [];
        sleepInfo.slice(dateIndex - 6, dateIndex + 1).map(x => {
            tempData.push(x.duration);
            tempLabel.push(x.dateTime.substring(5))
        });
        setSleepLineData(tempData);
        setSleepLineLabel(tempLabel);
        setSleepLoading(false);
        console.log("sleep loading finished")
    }

    //Activities Promise
    const stepPromise = fetch("http://localhost:8000/api/activities/getLineChartSteps").then(response => response.json()).then(res => {return res})
    const disPromise = fetch("http://localhost:8000/api/activities/getdailydistance").then(response => response.json()).then(res => {return res})
    const exerDurPromise = fetch("http://localhost:8000/api/activities/getAllExerciseDuration/p?day=" + date).then(response => response.json()).then(res => {return res})
    const caloriesPromise = fetch("http://localhost:8000/api/activities/GetDailyCalories").then(response => response.json()).then(res => {return res})

    //Sleep Promise
    const durationPromise = fetch("http://localhost:8000/api/sleep/getsleepduration").then(response => response.json()).then(res => {return res});

    const proList = [stepPromise, disPromise, exerDurPromise, caloriesPromise, durationPromise]
    Promise.all(proList)
    .then(async() => {
        activitiesUpdate();
        sleepUpdate();
    })
}
export default allPageFetch