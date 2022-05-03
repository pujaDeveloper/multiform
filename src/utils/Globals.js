
import DeviceInfo from 'react-native-device-info';
import { setStoredData } from './store';
import { showMessage, hideMessage } from "react-native-flash-message";



export default Globals = {

    isIpad: DeviceInfo.isTablet(),

    // Storage Key
    kUserData: "userData",
    kToken: "token",

    //DB keys
    favCategories: "fav_categories",
    loggedIn: "loggedIn",

    //notification types
    NOTIFICATION_TYPES: ["profile_score","video_live"],


    //KEYS
    KEY_ME : "me",
    KEY_LOGGED_IN : "Logged In"


}


export const showToast = (message) => {
    showMessage({ message: message, backgroundColor: Color.themeColor, type: "info", hideOnPress: true, duration: 5000 });
  }

export const clearUserData = async () => {
    // await setStoredData(Globals.kUserData, "")
    // await setStoredData(Globals.kToken, "")
}

