import React, {Component} from 'react';
import {
    View,
    Text,
    Stylesheet,
    StyleSheet,
    ActivityIndicator,
    SafeAreaView, ScrollView
} from 'react-native';
import EventListItem from './items/EventListItem';


class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount() {
        return fetch('http://codepulse.co.uk/tottenham-events.json', {
            headers: {
                'Cache-Control': 'no-cache'
            }
        }).then((response) => response.json())
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
            <View style={styles.nextEvent}>
                <View style={styles.nextEventDateWrapper}>
                    <Text style={styles.nextEventDate}>{nextEvent.date}</Text>
                </View>
                <View style={styles.nextEventInfoWrapper}>
                    <Text style={styles.nextEventInfo}>{nextEvent.event} - {nextEvent.start_time}</Text>
                </View>
                <View style={styles.venueWrapper}>
                    <Text style={styles.venueTitle}>Venue:</Text>
                    <Text style={styles.venueLocation}>Tottenham Hotspur Stadium, White Hart Lane</Text>
                </View>
            </View>
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
                    <Text style={styles.nextEventTitle}>Next Event</Text>
                    {this.getLatestEvent()}
                    <View style={styles.upcomingEventsWrapper}>
                        <Text style={styles.upcomingEvents}>Upcoming Events</Text>
                    </View>
                    <View style={styles.eventList}>
                        <ScrollView>
                            {this.getEvents()}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            )
        }
    }
}

const styles = StyleSheet.create({
    nextEvent: {
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 30,
        backgroundColor: '#ffc66a',
        borderRadius: 20,
        // height: 200,
        width: 350,
    },
    upcomingEventsWrapper: {
        paddingBottom: 30,
        paddingTop: 30,
    },
    eventList: {
        height: 400,
    },
    nextEventTitle: {
        color: 'white',
        fontSize: 25,
        paddingTop: 25,
        paddingBottom: 25,
        fontFamily: 'SFProDisplay_heavy'
    },
    nextEventDate: {
        fontSize: 18,
        color: '#231f40',
        fontFamily: 'SFProDisplay_regular'
    },
    nextEventDateWrapper: {
        backgroundColor: '#ffab5f',
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    nextEventInfoWrapper: {
        alignItems: 'flex-end',
    },
    nextEventInfo: {
        fontSize: 23,
        color: '#231f40',
        paddingTop: 20,
        fontFamily: 'SFProDisplay_medium',
        // width:300,
    },
    subTitle: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 13,
    },
    headertext: {
        height: 300,
    },
    venueLocation: {
        color: '#a37d41',
        fontFamily: 'SFProDisplay_regular'
    },
    venueTitle: {
        color: '#231f40',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 5,
        fontFamily: 'SFProDisplay_medium'
    },
    venueWrapper: {
        alignItems: 'center',
        marginBottom: 20,
    },
    upcomingEvents: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'SFProDisplay_heavy'
    }
});

export default EventList;
