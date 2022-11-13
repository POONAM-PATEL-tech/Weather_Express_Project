const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.nodeValue;

    if (cityVal === "") {
        city_name.innerText = "Plz write the name before search";

    } else {
        let url = `http://api.openweathermap.org / data / 2.5 / weather ? q = pune & appid =f362bc9ef81429950c49f8218e818cd`;
        const response = await fetch(url);
    }
}
submitBtn.addEventListener('click', getInfo);