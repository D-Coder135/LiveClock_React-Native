import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class LiveClock extends React.Component {

    constructor() {
        super();
        this.state = {
            currentTime: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => this.liveUpdate(), 1000)
    }

    liveUpdate = () => {
        this.setState({currentTime: new Date()})
    }

    render() {
        return (
             <View style={styles.container}>
      <Text style={styles.paragraph}>
        {this.state.currentTime.toLocaleTimeString('en-US')}
      </Text>
    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 34,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'red'
    },
    logo: {
      height: 128,
      width: 128,
    }
  });