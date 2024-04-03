import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SplashScreen extends Component {

    componentDidMount() {
        // Display the splash screen for 5 seconds, then navigate to Login screen.
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 5000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hola!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});