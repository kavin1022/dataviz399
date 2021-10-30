const homeFetch = async(date, setHomeLoading, setStepsHome, setStepLineLabels, setStepLineData) => {

    const stepLinePromise = fetch("http://localhost:8000/api/activities/getLineChartSteps").then(response => response.json()).then(res => {return res});
    const proList = [stepLinePromise]
    Promise.all(proList)
    .then(async() => {
        let data = (await stepLinePromise).reverse()
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
    })
}

export default homeFetch