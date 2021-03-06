const setIconBasedOnType = (type) => {
  let icon;
  if (type === constants.cloudy) {
    icon = "cloud";
  } else if (type === constants.sunny) {
    icon = "sun";
  } else {
    icon = "cloud-rain";
  }
  return `<span>
    <i class="fas fa-${icon}"></i>
    </span> `;
};

const setSelectedDay = (index) => {
  for (let i = 0; i < data.days.length; i++) {
    if (i === index) {
      selectedDay = data.days[i];
      render();
      return;
    }
  }
  selectedDay = index;
  render();
};

const setTempUnit = (unit) => {
  tempUnit = unit;
  render();
};

const getTempByUnit = (temp) => {
  if (tempUnit === constants.farenheit) {
    const farenheit = (temp * 9) / 5 + 32;
    return Math.round(farenheit);
  } else {
    return temp;
  }
};
const setWindUnit = (unit) => {
  windUnit = unit;
  render();
};
const getWindByUnit = (speed) => {
  if (windUnit === constants.km) {
    return speed * 3.6;
  } else {
    return speed;
  }
};

const getTempUnitSign = (tempUnit) => (tempUnit === "C" ? "°C" : "°F");

const day = (data, index) => {
  return `
      <div class="innerBox" onClick="setSelectedDay(${index})">
      ${data.day}
      <p>
      ${getTempByUnit(data.temp)}
      ${getTempUnitSign(tempUnit)}
      </p>
      ${setIconBasedOnType(data.type)}
      </div>`;
};

const dayDetail = (data) => {
  return `
      <div>
      <button onClick="setSelectedDay(false)">Back</button>
      <div class="chosenBox">
        <p>${data.windDirection}</p>
        <p>${data.day}</p>
        <p>
          ${getTempByUnit(data.temp)}
          ${getTempUnitSign(tempUnit)}
          ${setIconBasedOnType("${data.type}")}
        </p>
        <p>
          ${getWindByUnit(
            data.windSpeed
          )} ${windUnit} <i class="fas fa-location-arrow"></i>
        </p>
        <p>${data.type}</p>
        <div class="buttonInner">
          <button onClick="setTempUnit('F')">
            Convert to Farenheit
          </button>
          <button onClick="setTempUnit('C')">
            Convert to Celsius
          </button>
        </div>
        <div class="buttonInner">
          <button onClick="setWindUnit('m/s')">
            Convert to m/s
          </button>
          <button onClick="setWindUnit('km/h')">
            Convert to km/h
          </button>
        </div>
      </div>
    </div>`;
};
