import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.menu}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.button}
            >
                <Text style={styles.buttontext}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Tickets')}
                style={styles.button}
            >
                <Text style={styles.buttontext}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Contact')}
                style={styles.button}
            >
                <Text style={styles.buttontext}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row'
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 0,
        marginRight: 0,
        marginLeft: 0
    },
    buttontext: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 18,
        padding: 10
    }
});

export default Menu;