// Util functions should be pure funciton - same input gives you the same output //hook2 - so an API call like a weather GET shouldnt be here, but in a component folder?

const getWeatherCurrent = async (setWeatherData) => {
  //       _._. GET location of users device
  const locationCurrent = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject); //hook2 - write down why creating a promise was needed
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationCurrent.coords.latitude}&lon=${locationCurrent.coords.longitude}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`; // hook1 - swap this < with this (my own API key)\/, when my API key will be accepted (should be on 23 of June)
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationCurrent.latitude}&lon=${locationCurrent.longitude}&appid=079efb8bdec028c18644ef2e63ad721e`;

  return (
    //       _._. GET weather in that location (passed through the url)
    fetch(url)
      .then((response) => response.json()) //hook2 - catch errors - should impement it, or is the code safe?
      .then((data) => {
        setWeatherData(data);

        return data;
      })
  );
};

export default getWeatherCurrent;

//
//~~ _.  Get and set weather in the users location
//
//       _._. GET location of users device
//
//       _._. GET weather in that location (passed through the url)
//
