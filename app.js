

function Cal(){
    let principal = document.getElementById('principal');
    let years = document.getElementById('years');
    let rate = document.getElementById('rate');
    console.log((rate.value /12) /100);
    let result = principal.value * ((rate.value /12) /100) * Math.pow(1 + ((rate.value /12) /100) , years.value * 12) / (Math.pow(1 + ((rate.value /12) /100) , years.value * 12) - 1);
    document.getElementById('result').innerText = 'EMI: ' + result.toFixed(2) + 'Rs';
}