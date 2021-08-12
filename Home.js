import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Menu from './Menu';

const Home =(props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.globologo}
                source={require('./images/Logo.png')}
             />
            <Text style={styles.title}>Welcome TO GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <Image
                style={styles.heroimage}
                source={require('./images/boxing.png')}
            />
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
            <View style={styles.menu}>
                <Menu />
            </View>
        </View>
    );
}

const introText = `Buy Your Tickets Here`;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    },
    textcontainer: {
        padding: 10
    },
    globologo: {
        height: 100,
        width: 150
    },
    title: {
        fontFamily: 'Ubuntu-Regular'
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Ubuntu-Regular'
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300'
    },
    heroimage: {
        height: 170,
        width: '100%'
    },
    menu: {
        position: 'absolute',
        bottom: 0
    }
});

export default Home;