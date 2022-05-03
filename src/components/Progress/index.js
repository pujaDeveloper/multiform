import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import PropTypes from 'prop-types';
import Color from "../../utils/color";
import styles from './styles';
import { convertFontScale, screenWidth } from "../../utils/theme";

export default class Progress extends Component {
    render() {
        const { size, customStyles, type } = this.props;
        return (
            type == 1 ?
                (<View style={[{ width:'100%', backgroundColor: Color.themeColor, alignSelf: 'center', justifyContent: 'center', alignContent: 'center' }, this.getSizeStyle(), customStyles]}>
                    <ActivityIndicator
                        styleS={{ alignSelf: 'center' }}
                        animating={true}
                        color={Color.WHITE}
                        size={size} />
                </View>)
                :
                (
                    <ActivityIndicator
                        style={[{ alignSelf: 'center'}, customStyles]}
                        animating={true}
                        color={Color.themeColor}
                        size={size} />
                )

        );
    }

    getSizeStyle() {
        return this.props.size == 'small' ? { borderRadius: convertFontScale(13), width: convertFontScale(26), height: convertFontScale(26) } : 
        { borderRadius: convertFontScale(6), width: screenWidth * 0.7, height: convertFontScale(44) }
    }
}

Progress.defaultProps = {
    size: "small",
    customStyles: {},
    type: 1
};

Progress.propTypes = {
    size: PropTypes.string,
    type: PropTypes.number
};