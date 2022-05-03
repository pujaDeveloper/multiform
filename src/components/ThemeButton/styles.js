import {StyleSheet} from 'react-native';
import Color from "../../utils/color"
import {screenHeight,screenWidth} from "../../utils/theme"

let progressStyle = {
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: Color.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
},
centerContainer: {
    backgroundColor: Color.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
},
indicatorStyle: {
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 10,
}
}

const styles = StyleSheet.create(progressStyle);

export default styles;