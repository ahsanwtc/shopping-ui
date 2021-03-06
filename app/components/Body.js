/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Image from './Image';

export default class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.column1}>
                    <Image source={require('../images/background-3445988_1920.jpg')} />
                </View>
                <View style={styles.column2}>
                    <Image source={require('../images/background-3445988_1920.jpg')} />
                </View>
                <View style={styles.full}>
                    <Image source={require('../images/background-3445988_1920.jpg')} />
                </View>

                <View style={styles.column1}>
                    <Image source={require('../images/background-3445988_1920.jpg')} />
                </View>
                <View style={styles.column2}>
                    <Image source={require('../images/background-3445988_1920.jpg')} />
                </View>
                <View style={styles.full}>
                    <Image source={require('../images/background-3445988_1920.jpg')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#c1c1c1',
    },
    column1: {
        flex: 1,
        padding: 5,
    },
    column2: {
        flex: 2,
        padding: 5,
    },
    full: {
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 5,
    },
});
