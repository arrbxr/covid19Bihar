import React from "react";
import style from "./Table.module.css";

const Table = ({ data, total }) => {
  return (
    <div className={style.table}>
      <table className="table">
        <thead>
          <tr>
            <th className="text-secondary">District</th>
            <th className="text-danger">confirmed</th>
            <th className="text-primary">Active</th>
            <th className="text-success">Rcvrd</th>
            <th className="text-secondary">Deaths</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.district}</td>
              <td>
                {d.delta.confirmed > 0 ? (
                  <span className="badge badge-sm badge-danger badge-pill mr-1">
                    {`+${d.delta.confirmed}`}
                  </span>
                ) : (
                  " "
                )}{" "}
                {d.confirmed > 0 ? d.confirmed : "-"}
              </td>
              <td>{d.active > 0 ? d.active : "-"}</td>
              <td>
                {d.delta.recovered > 0 ? (
                  <span className="badge badge-sm badge-success badge-pill mr-1">{`+${d.delta.recovered}`}</span>
                ) : (
                  ""
                )}
                {d.recovered > 0 ? d.recovered : "-"}
              </td>
              <td>{d.deceased > 0 ? d.deceased : "-"}</td>
            </tr>
          ))}
          <tr>
            <th className="text-secondary">Total</th>
                <th className="text-danger">{total.confirm}</th>
                <th className="text-primary">{total.active}</th>
                <th className="text-success">{total.recovered}</th>
                <th className="text-secondary">{total.deaths}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
