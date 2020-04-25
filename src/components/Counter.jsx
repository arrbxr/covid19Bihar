import React from "react";
import style from "./Counter.module.css";

const Banner = ({ data }) => {
  //console.log(data);
  return (
    <div className={style.container}>
      <div className={style.counter}>
        <div className={style.confirm}>
          <h5 className={style.confirm_name}>Confirmed</h5>
          <h4 className={style.h4}>
            [
            {isNaN(data.deltaConfirm)
              ? ""
              : data.deltaConfirm > 0
              ? "+" + data.deltaConfirm
              : "+0"}
            ]
          </h4>
          <h1 className={style.h1}>{data.confirm}</h1>
        </div>
      </div>

      <div className={style.counter}>
        <div className={style.active}>
          <h5 className={style.active_name}>Active</h5>
          <h4 className={style.h4}>&nbsp;</h4>
          <h1 className={style.h1}>{data.active}</h1>
        </div>
      </div>

      <div className={style.counter}>
        <div className={style.recover}>
          <h5 className={style.recover_name}>Recovered</h5>
          <h4 className={style.h4}>
            [
            {isNaN(data.deltaRecovered)
              ? ""
              : data.deltaRecovered > 0
              ? "+" + data.deltaRecovered
              : "+0"}
            ]
          </h4>
          <h1 className={style.h1}>{data.recovered}</h1>
        </div>
      </div>

      <div className={style.counter}>
        <div className={style.deaths}>
          <h5 className={style.deaths_name}>Deaths</h5>
          <h4 className={style.h4}>
            [
            {isNaN(data.deltaDeaths)
              ? ""
              : data.deltaDeaths > 0
              ? "+" + data.deltaDeaths
              : "+0"}
            ]
          </h4>
          <h1 className={style.h1}>{data.deaths}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
