import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Act = ({bool}) => (
    <View style={[styles.container]}>
        {console.log(bool)}
        <ActivityIndicator
            style={{
                height: 50,
                width: 50,
                // borderColor: "pink",
                // borderWidth: 2
            }}
            animating={bool} size={40} color="blue" />
  </View>
);

const styles = StyleSheet.create({
    container: {
            // flex: 1,
        width: 50,
        alignItems: "center",
        // borderColor: "pink",
        // borderWidth: 2
    },
});

export default Act;