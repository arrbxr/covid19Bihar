import React, { Component } from "react";
import axios from "axios";

import Header from './Header';
import Counter from "./Counter";
import Table from "./Table";
import BarChart from './Chart/BarChart';
import Footer from './Footer';

class Home extends Component {
  state = {
    /*
    district: {
      confirm: "",
      active: "",
      deaths: "",
      recovered: "",
    },
    delta: {
      confirm: "",
      deaths: "",
      recovered: "",
    },
*/
    districtData: [],
    stateLevel: {
      active: 0,
      confirm: 0,
      deaths: 0,
      recovered: 0,
      deltaDeaths: 0,
      deltaRecovered: 0,
      deltaConfirm: 0,
      lastUpdate: '',
    },
    loading: true
  };

  async componentDidMount() {
    const fetchData = await axios.get(
      "https://api.covid19india.org/v2/state_district_wise.json"
    );

    let data = [];
    for (let i = 0; i < fetchData.data.length; i++) {
      if (fetchData.data[i].state === "Bihar")
        data = fetchData.data[i].districtData;
    }

    /*
    data.map((data) => {
      return this.setState({
        district: {
          name: data.district,
          confirm: data.confirmed,
          active: data.active,
          deaths: data.deceased,
          recovered: data.recovered,
        },
        delta: {
          confirm: data.delta.confirmed,
          deaths: data.delta.deceased,
          recovered: data.delta.recovered,
        },
      });
    });*/

    this.setState({ districtData: data });

    // Counter State Level
    const stateTotal = await axios.get(
      "https://api.covid19india.org/data.json"
    );

    stateTotal.data.statewise.map((data) => {
      if (data.state === "Bihar" || data.statecode === "BR") {
        return this.setState((s) => ({
          stateLevel: {
            active: data.active,
            confirm: data.confirmed,
            deaths: data.deaths,
            recovered: data.recovered,
            deltaDeaths: data.deltadeaths,
            deltaRecovered: data.deltarecovered,
            deltaConfirm: data.deltaconfirmed,
            lastUpdate: data.lastupdatedtime,
          },
        }));
      }
    });

    this.setState({loading: false})
  }

  render() {
   // console.log(this.state.stateLevel.lastUpdate)
    if(this.state.loading) {
      return <p>Loading...</p>
    } else
    return (
      <React.Fragment>
        <Header data={this.state.stateLevel.lastUpdate}/>
        <Counter data={this.state.stateLevel} />
        <Table data={this.state.districtData} total={this.state.stateLevel} />
        <BarChart data={this.state.stateLevel} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
