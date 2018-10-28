import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCompassCalibrationElement
 * @class IconOutlineCompassCalibrationElement
 * @extends {AoflElement}
 */
class IconOutlineCompassCalibrationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCompassCalibrationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-compass-calibration';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCompassCalibrationElement.is, IconOutlineCompassCalibrationElement);

export default IconOutlineCompassCalibrationElement;
