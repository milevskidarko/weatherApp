let inner = document.getElementById("inner");
let output = "";
let selectedDay = false;
let tempUnit = "C";
let windUnit = "m/s";

const render = () => {
  output = "";
  if (!selectedDay) {
    output += data.days.map((index, data) => day(index, data));
  } else {
    output = dayDetail(selectedDay);
  }
  inner.innerHTML = `<div class="box">${output}</div>`;
};
render();
