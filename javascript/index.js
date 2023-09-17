function showTime() {
  // New York date and time
  let newYorkDateElement = document.querySelector("#new-york .date");
  let newYorkTimeElement = document.querySelector("#new-york .time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Manila date and time
  let manilaDateElement = document.querySelector("#manila .date");
  let manilaTimeElement = document.querySelector("#manila .time");
  let manilaTime = moment().tz("Asia/Manila");
  manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
  manilaTimeElement.innerHTML = manilaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

showTime();
setInterval(showTime, 1000);
