import {Dimensions} from 'react-native';

class Scaler {
  // attributes
  _baseWidth;
  _baseHeight;
  _customRatio;

  // constructor
  constructor(baseWidth = 0, baseHeight = 0, customRatio = 1) {
    this._baseWidth = baseWidth;
    this._baseHeight = baseHeight;
    this._customRatio = customRatio;
  }

  // getters
  getBaseWidth() {
    return this._baseWidth;
  }

  getBaseHeight() {
    return this._baseHeight;
  }

  getCustomRatio() {
    return this._customRatio;
  }

  // setters
  setBaseWidth(newBaseWidth) {
    this._baseWidth = newBaseWidth;
  }

  setBaseHeight(newBaseHeight) {
    this._baseHeight = newBaseHeight;
  }

  setCustomRatio(newCustomRatio) {
    this._customRatio = newCustomRatio;
  }

  // methods
  getWidthBasedTransformValue(targetValue) {
    return (
      Number.parseFloat(targetValue / this.getBaseWidth()) *
      Dimensions.get('window').width *
      this.getCustomRatio()
    );
  }

  getHeightBasedTransformValue(targetValue) {
    return (
      Number.parseFloat(targetValue / this.getBaseHeight()) *
      Dimensions.get('window').height *
      this.getCustomRatio()
    );
  }
}

const BaseScaler = new Scaler(390, 844);
export default BaseScaler;
