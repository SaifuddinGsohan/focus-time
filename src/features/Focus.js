import React ,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { color } from '../Utils/colors';
import { spacing , fSize } from '../Utils/sizes'
import {RoundedButton} from '../components/RoundedButton';

export const Focus = ({addSub}) => {
  const [sub, setSub] = useState(null)
  console.log(sub)
  return (
    <View style={styles.container}>
      <View style={styles.inputContener}>
          <TextInput 
            style={styles.textInut}
            label='What wouldyou like to focus on?'
            onChangeText={setSub}
            outlined ='focused'
          />
          <View
            style={styles.button}
          >
            <RoundedButton 
              title='+' 
              size={50} 
              onPress={()=> addSub(sub)}
            />
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  button:{
    justifyContent:'center',
  },
  textInut:{
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContener: {
    paddingTop: spacing.xxxl,
    padding: spacing.xl,
    justifyContent: "top",
    color: color.whait,
    flexDirection:'row'
  },
});
