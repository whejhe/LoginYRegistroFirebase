import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const auth = FIREBASE_AUTH;

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    }
});

export default Login;
