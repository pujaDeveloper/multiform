import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import PropTypes from 'prop-types';
import Color from "../../utils/color";
import styles from './styles';
// import { convertFontScale } from "../../utils/theme";
import { Message } from "../../utils/message";

export default class NoData extends Component {
    render() {
        const { label, customStyle} = this.props;
        return (
            <View style={[{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', justifyContent:'center' },  customStyle]}>
                <Text style={{color: Color.Grey, fontSize: 14, textAlign:'center', alignSelf:'center',}}>{label}</Text>
            </View>
        );
    }

}

NoData.defaultProps = {
    label : "No Data",
    customStyles: {},
};

NoData.propTypes = {
    label: PropTypes.string,
};