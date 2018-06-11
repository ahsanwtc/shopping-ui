/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
} from 'react-native';

import HeroText from './HeroText';

export default class HeroImage extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../images/laptop-3190194_1920.jpg')}
                style={styles.hero}
            >
                <HeroText />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    hero: {
        height: 250,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
