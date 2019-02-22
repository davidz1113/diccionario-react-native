import React from 'react';
import { View } from 'react-native';
const CardSection = (props) => {
    const { viewStyles } = styles;
    return (
            <View style={viewStyles}>
                {props.children}
            </View>
        
    );
};
const styles = {
    viewStyles: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        padding: 5,
        
        backgroundColor: '#fff',
        
    }
};
export default CardSection;