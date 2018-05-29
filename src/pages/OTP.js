import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import Button from '../components/Button';

import { Actions, Modal} from 'react-native-router-flux';

const { height: deviceHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class OTP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: new Animated.Value(-deviceHeight)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: 0
    }).start();
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: -deviceHeight
    }).start(Actions.pop);
  }

  cancel() {
    Actions.pop();
  }

  render() {
    return (
      <Animated.View style={[styles.container, { backgroundColor: 'rgba(52,52,52,0.5)' },
      { transform: [{ translateY: this.state.offset }] }]}>
        <View style={{
          width: 250,
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
          <Text>Test Data</Text>
          <Button
                  label="CANCEL"
                  styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                  onPress={this.cancel.bind(this)}/>
        </View>
      </Animated.View>
    );
  }
}