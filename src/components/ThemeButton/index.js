import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import PropTypes from 'prop-types';
import Color from "../../utils/color";
import styles from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import { convertFontScale, screenWidth } from "../../utils/theme";
// import { MontBold, MontMedium, MontRegular, MontSemiBold } from '../../utils/Fonts';
import { Message } from '../../utils/message';

export default class ThemeButton extends Component {
    render() {
        const { label, onClick, color, style, disabled, isSubmitted } = this.props;
        return (
            <TouchableOpacity disabled={disabled}  onPress={() => onClick()} style={[style, { backgroundColor: disabled ? 'grey' : isSubmitted ? Color.Green : Color.themeColor, width: screenWidth * 0.7, alignSelf: 'center', 
            borderRadius: convertFontScale(6), padding: convertFontScale(10) }]}>
                <Text style={{ textAlign: 'center', fontSize: convertFontScale(14), fontWeight: 'bold' , color: Color.WHITE }}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

// Progress.defaultProps = {
//     text: "Please Wait...",
// };

// Progress.propTypes = {
//     text: PropTypes.string
// };