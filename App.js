import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import {Focus} from "./src/features/Focus";
import {Timer} from './src/features/Timer' 
import {color} from './src/Utils/colors'
import { History } from './src/features/History';
// or any pure javascript modules available in npm

export default function App() {
  const [focusSub, setFocusSub] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <View style={styles.container}>
      {focusSub ? (
        <Timer
          currentSub={focusSub}
          onTimeEnd={(Sub)=>{
            setHistory([...history, Sub]);
            console.log('onTimeEnd');
            setFocusSub(null);
          }}
          clearSub={()=>{ setFocusSub(null)}}
        />
      ) : (
        <>
          <Focus addSub= {setFocusSub}/>
          <History history={history}/>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    backgroundColor: color.dBlue,
  },
});
