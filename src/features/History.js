import React from "react";
import { Text, View, StyleSheet, FlatList,} from "react-native";
import {color} from "../Utils/colors";
import { fSize, spacing } from "../Utils/sizes";


export const History = ({history}) => {
    if( !history || !history.length) return (
        <Text style={styles.title}>
            We have no history yet!
        </Text>
    );


    const rndItem = ({item}) => { <Text style={styles.item}>{item }</Text> }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Complete Focus on: 
            </Text>
            <FlatList
                data={history}
                renderItem={rndItem}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.md,
    },
    title: {
        fontSize: fSize.lg,
        color: color.white,
        fontWeight: "bold",
        paddingTop: spacing.xl,
        justifyContent: "center",
        textAlign: "center",
    },
    item: {
        fontSize: fSize.md,
        color: color.white,
        paddingTop: spacing.sm,
    },
});


