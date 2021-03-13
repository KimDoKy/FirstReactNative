import React from 'react';
import { View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';
import ShadowBox from './components/ShadowBox';

const App = () => {
    return (
        <View style={viewStyles.container}>
            <ShadowBox />
        </View>
    );
};

export default App;
