const inputTemp = document.getElementById('input-temp');
const fromUnitInput = document.getElementById('input-unit');
const toUnitInput = document.getElementById('output-unit');
const outputTemp = document.getElementById('output-temp');
const converter = document.getElementById('converter');

const convertTemp = (e, value, fromUnit, toUnit)=>{

    e.preventDefault();
    if(fromUnit === 'celcius'){
        if(toUnit === 'kelvin') return value + 273.15;
        else if (toUnit === 'fahrenheit') return (9/5) * (value + 32);
        return value;
    }

    if(fromUnit === 'kelvin'){
        if(toUnit === 'celcius') return value - 273.15;
        else if(toUnit === 'fahrenheit') return value * (9/5) - 459.67;
        return value
    }

    if(fromUnit === 'fahrenheit'){
        if(toUnit === 'kelvin') return value * (5/9) + 459.67;
        else if(toUnit === 'celcius') return (5/9) * (value - 32);
        return value
    }
}

converter.addEventListener('submit', e => {

    const inputTempValue = parseInt(inputTemp.value);
    const fromUnit = fromUnitInput.value;
    const toUnit = toUnitInput.value;
    convertTemp(e, inputTempValue, fromUnit, toUnit);
    const temperature = convertTemp(e, inputTempValue, fromUnit, toUnit);

    if(toUnit === 'celcius') outputTemp.innerHTML = `${Math.ceil(temperature)}C`;
    else if(toUnit === 'kelvin') outputTemp.innerHTML = `${Math.ceil(temperature)}K`;
    else if(toUnit === 'fahrenheit') outputTemp.innerHTML = `${Math.ceil(temperature)}F`;
});