import {Dimensions} from 'react-native';

class Scaler {
  // attributes
  _baseWidth;
  _baseHeight;

  // constructor
  constructor(baseWidth = 0, baseHeight = 0) {
    this._baseWidth = baseWidth;
    this._baseHeight = baseHeight;
  }

  // getters
  getBaseWidth() {
    return this._baseWidth;
  }

  getBaseHeight() {
    return this._baseHeight;
  }

  // setters
  setBaseWidth(newBaseWidth) {
    this._baseWidth = newBaseWidth;
  }

  setBaseHeight(newBaseHeight) {
    this._baseHeight = newBaseHeight;
  }

  // methods
  getWidthBasedTransformValue(targetValue, customRatio = 1) {
    return (
      Number.parseFloat(targetValue / this.getBaseWidth()) *
      Dimensions.get('window').width *
      customRatio
    );
  }

  getHeightBasedTransformValue(targetValue, customRatio = 1) {
    return (
      Number.parseFloat(targetValue / this.getBaseHeight()) *
      Dimensions.get('window').height *
      customRatio
    );
  }
}

const BaseScaler =
  Dimensions.get('window').width <= Dimensions.get('window').height
    ? new Scaler(390, 844)
    : new Scaler(844, 390);

export default BaseScaler;
