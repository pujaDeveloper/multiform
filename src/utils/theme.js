import React from 'react';
import { Platform, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

const screenHeight1 = Dimensions.get('screen').height;
const windowHeight1 = Dimensions.get('window').height;
export const navbarHeight = screenHeight1 - windowHeight1

export function isIOS() {
    return Platform.OS == "ios" ? true : false
}

const isTablet = () => {
    if (DeviceInfo.isTablet()) {
        return true
    } else {
        return false
    }
};

const responsiveHeight = (height) => {
    if (!isTablet())
        return height;
    else
        return (height + (height * 0.25));

};

const convertFontScale = (fontSize) => {
    const baseSize = Platform.select({ android: 400, ios: 375 })
    return fontSize * (screenWidth / baseSize)
}


import icons from './icons';
import images from './images';

export { icons, images,convertFontScale, responsiveHeight, width, height };
