import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { Countdown } from '../components/Countdown'

import {color} from '../Utils/colors';
import {size} from '../Utils/sizes';

export const Timer = ({currentSub}) =>{
  return(
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Text>
          <Countdown 
            onProgress={()=>{}}
            isPaused
            onEnd={()=>{}}
          />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown:{

  },
})