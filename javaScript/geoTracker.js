let successCallback = (position) => {
    console.log(position)
}
let errarCallback = (error) => {
    console.log(error)
}
navigator.geolocation.getCurrentPosition(successCallback, errarCallback);