const getLocation = (setLocationCurrent) => {
  navigator.geolocation.getCurrentPosition((position) => {
    // console.log("postion :", position);
    setLocationCurrent(position.coords);
  });
};

export default getLocation;
