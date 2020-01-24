import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, ImageBackground, Text, SafeAreaView} from 'react-native';
import EventList from './components/EventList';
import * as Font from 'expo-font';

const {width, height} = Dimensions.get('screen');

class App extends Component {
    componentDidMount() {
        Font.loadAsync({
            'montserrat': require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
            'montserrat-light': require('./assets/fonts/montserrat/Montserrat-Light.ttf'),
            'montserrat-bold': require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
            'montserrat-black': require('./assets/fonts/montserrat/Montserrat-Black.ttf'),
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./assets/imgs/colorful-gradient-layered-design-1024x576.jpg')} style={{width: width, height: height}}>
                    <View style={styles.overlay}>
                        <EventList/>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        // backgroundColor: 'rgba(0,0,0,0.3)',
    },
    meta: {
        marginTop: 5,
        lineHeight: 20,
        fontWeight: 'bold',
        fontSize: 18,
        opacity: .8
    },
    listWrapper: {
        marginTop: 55,
        width: width,
        height: height,
        backgroundColor: '#082535',
        borderRadius: 4,
        shadowColor: '#3d3d3d',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1,
        overflow: 'hidden'
    },
    newContainer: {
        justifyContent: "center",
    }
});

export default App;
