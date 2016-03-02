function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);//一直循环，知道newdate比startTime大milliSes
  }
 console.log("Hello Start");
  sleep(10000);
  console.log("Hello Start");
