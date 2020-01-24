import React, {Component} from 'react';
import {
    View,
    Text,
    Stylesheet,
    StyleSheet,
    ActivityIndicator,
    Dimensions,
    SafeAreaView, ScrollView
} from 'react-native';
import EventListItem from './items/EventListItem';

const {width, height} = Dimensions.get('screen');

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount() {
        return fetch('http://codepulse.co.uk/tottenham-events.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                })
            })
            .catch((error) =>
                console.log(error)
            )
    }

    getEvents = () => {
        return this.state.dataSource.upcomingEvents.slice(1).map((data, index) => {
            return <EventListItem detail={data} key={index}/>
        })
    }

    getLatestEvent = () => {
        let nextEvent = this.state.dataSource.nextEvent
        return (
            <SafeAreaView style={styles.nextEvent}>
                <Text style={styles.subTitle}>Next event:</Text>
                <Text style={styles.nextEventDate}>{nextEvent.date}</Text>
                <Text style={styles.nextEventInfo}>{nextEvent.event} - {nextEvent.start_time}</Text>
            </SafeAreaView>
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <SafeAreaView style={styles.container}>
                    <ActivityIndicator/>
                </SafeAreaView>
            )
        } else {
            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.headertext}>
                        {this.getLatestEvent()}
                    </View>
                    <ScrollView>
                        {this.getEvents()}
                    </ScrollView>

                </SafeAreaView>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 300,
    },
    nextEvent: {
        marginTop: 100,
        marginBottom: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextEventDate: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'montserrat-bold',
    },
    nextEventInfo: {
        fontSize: 13,
        color: 'white',
        textTransform: 'uppercase',
        fontFamily: 'montserrat-bold',
    },
    subTitle: {
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: 'montserrat-bold',
        fontSize: 13,
    },
    headertext: {
        height: 300,
    },});

export default EventList;
