function getAns(){
    const principal = document.getElementById("principal").value;
    const rateOfReturn = document.getElementById("rateOfInterest").value;
    const time = document.getElementById("time").value;

    fetch("http://localhost:3000/?principal="+principal+"&rateOfInterest="+rateOfReturn+"&time="+time)
        .then (function(response){
            response.text()
            .then (function(finalAns){
                document.getElementById("ans").value=finalAns;
            })
        })
}

function debounce(){
    let timeout;
    clearTimeout(timeout);
    timeout=setTimeout(function(){
        getAns()
    },100)
}
