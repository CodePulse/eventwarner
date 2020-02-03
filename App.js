import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import EventList from './components/EventList';
import Header from './components/Header';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
const {width, height} = Dimensions.get('screen');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'SFProDisplay_bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
            'SFProDisplay_heavy': require('./assets/fonts/SFProDisplay-Heavy.ttf'),
            'SFProDisplay_medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
            'SFProDisplay_regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
        });
        this.setState({ isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }
        return (
            <View style={styles.container}>
                <Header/>
                <EventList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#231f40',
        height: height,
    },
});

export default App;
