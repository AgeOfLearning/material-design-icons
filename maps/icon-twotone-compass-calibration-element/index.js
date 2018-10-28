import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCompassCalibrationElement
 * @class IconTwotoneCompassCalibrationElement
 * @extends {AoflElement}
 */
class IconTwotoneCompassCalibrationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCompassCalibrationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-compass-calibration';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCompassCalibrationElement.is, IconTwotoneCompassCalibrationElement);

export default IconTwotoneCompassCalibrationElement;
