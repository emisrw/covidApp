import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

export class App extends Component {
  state = {
    data: {},
  };

  // do zapisania : aby zaciagac asynchronicznie dane ( await ) musimy miec asynchroniczna funkcje - mozna dac przed nawiasem ale w tym przypadku mozemy dac rowniez przed
  async componentDidMount() {
    const fetched = await fetchData();
    this.setState({ data: fetched });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
