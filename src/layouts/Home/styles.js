import {
  StyleSheet,
  Dimensions
} from 'react-native';
import color from '../../utils/color';
import Color from "../../utils/color"
import {
  convertFontScale,
  screenHeight,
  screenWidth
} from "../../utils/theme"
import Globals from "./../../utils/Globals";

let intro = {
  container: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: Color.WHITE,
    flex: 1
  },
  subContainer: {
    flex: 1, 
    // alignItems: 'stretch'
  },
  rowContainer : {
    minHeight : screenHeight/2.5 , 
    width: '100%', 
    alignItems: 'stretch', 
    paddingVertical: convertFontScale(10), 
    justifyContent: 'center',
    borderBottomColor: color.BLACK,
    borderBottomWidth: 2,
  },
  rowTitle:{
    color: color.BLACK, fontSize: convertFontScale(15), marginLeft: convertFontScale(12) 
  },
  textInputContainer: {
    width: '80%',
    height: convertFontScale(42),
    backgroundColor: color.WHITE,
    borderColor: color.DarkGrey,
    borderWidth: convertFontScale(1),
    borderRadius: convertFontScale(6),
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'center'
  },
  textInput: {
    marginLeft: convertFontScale(18),
    width: '90%',
    fontSize: convertFontScale(15),
    textAlign: 'left',
  },
  textInputMargin: {
    marginTop: 16 
  },
  errorText:{
    alignSelf: 'center', width: '80%', fontSize: convertFontScale(12), color: color.RedColor, fontWeight: '500', marginTop: convertFontScale(5)
  }
}

const styles = StyleSheet.create(intro);

export default styles;
