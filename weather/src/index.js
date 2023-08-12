let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
  
  // write your code here
  weather = weather.replace["san francisco", "san-francisco"]
console.log(weather);

let city = prompt("What is the city?");
let text;

if (city === "paris") {
  alert(`Paris is ${weather.paris.temp}°C and ${weather.paris.humidity}% humidity.`);
} else if (city === "tokyo") {
  alert(`Tokyo is ${weather.tokyo.temp}°C and ${weather.tokyo.humidity}% humidity.`);
} else if (city === "lisbon") {
  alert(`Lisbon is ${weather.lisbon.temp}°C and ${weather.lisbon.humidity}% humidity.`);
} else if (city === "san-francisco") {
  alert(`San Francisco is ${weather["san-francisco"].temp}°C and ${weather["san-francisco"].humidity}% humidity.`);
} else if (city === "oslo") {
  alert(`Oslo is ${weather.oslo.temp}°C and ${weather.oslo.humidity}% humidity.`);
} else {
  alert("City not found in the weather data.");
}