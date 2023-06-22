// Util functions should be pure funciton - same input gives you the same output

const getWeatherCurrent = async (url, setWeatherData) => {
  return (
    fetch(url)
      //hook2 - catch errors - should impement it, or is the code safe?
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);

        return data;
      })
  );
};

export default getWeatherCurrent;
