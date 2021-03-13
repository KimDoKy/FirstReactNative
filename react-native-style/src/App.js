import React from 'react';
import styled from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    return (
        <Container>
            <Button title='hanbit' />
            <Button title='React Native' />
            <Input borderColor="#3498db" />
            <Input borderColor="#9b59b6" />
        </Container>
    );
};

export default App;
