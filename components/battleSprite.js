import React, { Component } from 'react';
import { Image, View, Text} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';


export default class Battlesprite extends Component {
  state = {
        loop: false,
        resetAfterFinish: false
      };

  fps = 5;

//https://github.com/MiLeung/rn-sprite-sheet/blob/master/src/Example.js

  render(){
    return(
      <View>
      <SpriteSheet
            ref={ref => (this.kirby = ref)}
            source={require('../assets/images/kirby/kirby.png')}
            columns={2}
            rows={2}

            imageStyle={{ marginTop: -1 }}
            animations={{
              wave: [0,1]
            }}
            />
            <Text>sprite test</Text>
        </View>


   )
  }
}
play = type => {
    this.kirby.play({
      type,
      fps: this.fps,
      loop: this.state.loop,
      resetAfterFinish: this.state.resetAfterFinish,
      onFinish: () => console.log('hi')
    });
  };
