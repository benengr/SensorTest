import React, {Component} from 'react';
import { Text } from 'react-native';
import { barometer } from 'react-native-sensors';

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      severity: 2,
      subscription: null,
      pressure: 0.0
    };
  }

  componentDidMount() {
    const subscription = barometer.subscribe(({pressure}) => {
      console.log(`Pressure is ${pressure}`);
      this.setState({pressure});
    });
    this.setState({subscription});
  }

  componentWillUnmount() {

  }
  render() {
    return (<Text>Current Pressure: {this.state.pressure.toFixed(2)}</Text>);
  }
}
