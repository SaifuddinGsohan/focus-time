import React, {useState} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';
import { ProgressBar,} from 'react-native-paper';
import { Countdown } from '../components/Countdown'
import { useKeepAwake } from 'expo-keep-awake';

import {color} from '../Utils/colors';
import { spacing, fSize} from '../Utils/sizes';
import {RoundedButton} from '../components/RoundedButton';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

export const Timer = ({currentSub, clearSub, onTimeEnd}) =>{
  useKeepAwake();

  const [start, setStart] = useState(true);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setStart(false);
    setProgress(1);
    reset();
    onTimeEnd(currentSub);
  }

  return(
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown 
          minutes={minutes }
          onProgress={setProgress}
          isPaused={!start}
          onEnd={onEnd}
        />
        <View style={{paddingTop: spacing.xxl}}>
          <Text style={styles.text}>
            Focusing on
          </Text>
          <Text style={styles.task}>
            {currentSub}
          </Text>
        </View>
      </View>
      <View style={{paddingTop: spacing.sm}}>
        <ProgressBar 
          progress={progress} 
          color={color.lBlue} 
          style={{height:spacing.md}} 
        />
      </View>
      <View style={styles.timing}>
        <Timing onChangeTime={setMinutes}/>
      </View>  
      <View style={styles.button}>
        {
          start && (
            <RoundedButton
              onPress={()=>{setStart(false)}}
              title="Pause"
              color={color.dBlue}
              textColor={color.white}
            />
          )
        }
        {
          !start && (
            <RoundedButton
              onPress={()=>{setStart(true)}}
              title="Start"
              color={color.dBlue}
              textColor={color.white}
            />
          )
        }
      </View>
      <View style={styles.back}>
        <RoundedButton
          onPress={()=>{clearSub()}}
          title=" < "
          color={color.dBlue}
          textColor={color.white}
          size={50}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing.xl,
    padding: spacing.xxl,

  },
  timing:{
    flex: 0.3,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
  },
  title:{
    fontSize: fSize.lg,
    color: color.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task:{
    fontSize: fSize.md,
    color: color.white,
    textAlign: 'center',
  },
  back:{   
    paddingBottom: spacing.xxl,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})