let getGenTime = (timeString) => {
    
    let H = +timeString.substr(0, 2);
    let h = (H % 12) || 12;
    let ampm = H < 12 ? " AM" : " PM";
    return timeString = h + timeString.substr(2, 3) + ampm;
  }
  

export function returnTimesInBetween(start, end) {
    var timesInBetween = [];
    var startH = parseInt(start.split(":")[0]);
    var startM = parseInt(start.split(":")[1]);
    var endH = parseInt(end.split(":")[0]);
    var endM = parseInt(end.split(":")[1]);
    console.log("start: " , typeof start)
    console.log("end: " , typeof end)
    if (startM == 30)
      startH++;
    for (var i = startH; i < endH; i++) {
      timesInBetween.push(i < 10 ? "0" + i + ":00" : i + ":00");
      timesInBetween.push(i < 10 ? "0" + i + ":30" : i + ":30");
    }
    timesInBetween.push(endH + ":00");
    if (endM == 30)
      timesInBetween.push(endH + ":30")
  
    return timesInBetween.map(getGenTime);
  }

  export default getGenTime