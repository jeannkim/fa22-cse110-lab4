function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
  // call printTime() every second
  // 1 sec = 1000 millisecs
  setInterval(printTime, 1000);