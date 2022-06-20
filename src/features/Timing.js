import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';


export const Timing = ({onChangeTime}) => {
    return (
        <>
            <View style={Styles.timingBatun}>
                <RoundedButton
                    title="10"
                    size={75}
                    onPress={() => onChangeTime(10)}
                />
            </View>
            <View style={Styles.timingBatun}>
                <RoundedButton
                    title="15"
                    size={75}
                    onPress={() => onChangeTime(15)}
                />
            </View>
            <View style={Styles.timingBatun}>
                <RoundedButton
                    title="20"
                    size={75}
                    onPress={() => onChangeTime(20)}
                />
            </View>
        </>
    );
};

const Styles = StyleSheet.create({
    timingBatun: {
        flex: 1,
        alignItems: 'center',
    },
});
