import React, { useEffect, useState } from "react";
import {  getWorldTime } from "./Data/Api";
import "./App.css";
import desktopBgDay from "./assets/desktop/bg-image-daytime.jpg";
import desktopBgNight from "./assets/desktop/bg-image-nighttime.jpg";
import tabletBgDay from "./assets/tablet/bg-image-daytime.jpg";
import tabletBgNight from "./assets/tablet/bg-image-nighttime.jpg";
import mobileBgDay from "./assets/mobile/bg-image-daytime (1).jpg";
import mobileBgNight from "./assets/mobile/bg-image-nighttime.jpg";
import Advice from "./Components/Advice";
import Clock from "./Components/Clock";
import Footer from "./Components/Footer";

const App = () => {
  const [localTime, setlocalTime] = useState([]);
  const [time, settime] = useState(0);
  const [footer, setfooter] = useState<boolean>(false);
  useEffect(() => {
    setInterval(() => {
      getWorldTime(setlocalTime);
    }, 1000);
  }, []);
  useEffect(() => {
    setBackground();
  }, [localTime]);
  const { datetime, day_of_week, day_of_year, timezone, week_number }: any =
    localTime;
  const slicedTime = datetime?.slice(11, 16);
  function setBackground() {
    if (slicedTime) {
      if (Number(slicedTime?.slice(0, 2)[0]) === 0) {
        settime(Number(slicedTime.slice(0, 2)[1]));
      } else {
        settime(Number(slicedTime?.slice(0, 2)));
      }
    }
  }

  console.log(localTime);

  return (
    <div className="app">
      {time > 6 && time < 19 ? (
        <>
          <img className="desktop" src={desktopBgDay} alt="" />
          <img className="mobile" src={mobileBgDay} alt="" />
          <img className="tablet" src={tabletBgDay} alt="" />
        </>
      ) : (
        <>
          <img className="desktop" src={desktopBgNight} alt="" />
          <img className="mobile" src={mobileBgNight} alt="" />
          <img className="tablet" src={tabletBgNight} alt="" />
        </>
      )}
      <Advice footer={footer} />
      <Clock
        time={time}
        slicedTime={slicedTime}
        setfooter={setfooter}
        footer={footer}
      />
      <Footer
        time={time}
        dayOfWeek={day_of_week}
        dayOfYear={day_of_year}
        weekNumber={week_number}
        timezone={timezone}
        footer={footer}
      />
    </div>
  );
};

export default App;
