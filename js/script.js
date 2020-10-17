
// const and variables
const API_KEY = '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
//const redirect;
//insert a link to ao new page or a picture for the error
//cached elements references
let userInput;
let weatherData;

const $temp = $('#temp');
const $humidity = $('#humidity');
const $pressure = $('#pressure');
const $form = $('form');
const $input = $('input[type="text"]');


//event listeners
$form.on('submit', handleGetData);


//functions
//q={city name}&appid={API key}'

function handleGetData(evt){
    evt.preventDefault(); 
    userInput = $input.val();
    console.log(userInput)
    if(!userInput) return;
    $.ajax(BASE_URL + userInput + '&units=metric&appid=' + API_KEY)
    .then(function (data){
        console.log(data)
        weatherData = data;
        render();
        
    }, function(error){
        alert(`As a courtesy you have been redirected. Thank you for visitng. ${location.replace('https://www.weather.com')}`)
    });
}

function render(){
    $temp.text('The Temperature is: ' + weatherData.main.temp)
    $humidity.text('UV index: ' + weatherData.main.humidity)
    $pressure.text('The pressure: ' + weatherData.main.pressure)


}

