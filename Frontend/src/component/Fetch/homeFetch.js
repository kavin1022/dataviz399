const homeFetch = async(date, setHomeLoading, setStepsHome, setStepLineLabels, setStepLineData, setMinHeartRate, setMaxHeartRate, setAvgHeartRate, setTotalHeartRate) => {

    const stepLinePromise = fetch("http://localhost:8000/api/activities/getLineChartSteps").then(response => response.json()).then(res => {return res});
    const heartRatePromise = fetch("http://localhost:8000/api/activities/GetHeartRateByDay/p?day=" + date).then(response => response.json()).then(res => {return res});
    const proList = [stepLinePromise, heartRatePromise]
    Promise.all(proList)
    .then(async() => {
        let data = (await stepLinePromise).reverse()
        let heartRateData = await heartRatePromise
        for (let i = 0; i < data.length; i ++){
            if (data[i].dateTime === date){
                let temp = data.slice(i - 9, i + 1)
                setStepLineLabels(temp.map(x => x.dateTime.slice(5)));
		        setStepLineData(temp.map(x => x.value));
		        setStepsHome(data[i].value);
                setHomeLoading(false);
                console.log("home loading finished")
            }
        }
        
        let min = 200;
        let max = 0;
        let total = 0;
        let curr;
        for (let j = 0; j<heartRateData.length; j++){
            curr = heartRateData[j].value.avg_bpm
            total = total + curr;
            if (curr > max){max = curr};
            if (curr < min){min = curr};
        }

        setMinHeartRate(Math.round(min));
        setMaxHeartRate(Math.round(max));
        setAvgHeartRate(Math.round(total / 24));
        setTotalHeartRate(Math.round(total));

    })
}

export default homeFetch