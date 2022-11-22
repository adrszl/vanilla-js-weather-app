window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const long = position.coords.longitude;
      const lat = position.coords.latitude;
    });

    //https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
  } else {
    document.querySelector(".location-timezone").innerHTML =
      "Geolocation disabled or not supported by your browser";
    alert("Please enable geolocation, for the app to work");
  }
});
