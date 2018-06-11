/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class HeroText extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Sometext from Props</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {

    },
    headerText: {
        elevation: 1,

        // elevation for ios
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        borderRadius: 10,

        alignSelf: 'center',
        fontSize: 25,
        color: '#292929',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        fontWeight: 'bold',
    },
});
