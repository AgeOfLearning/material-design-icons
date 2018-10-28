import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCompassCalibrationElement
 * @class IconSharpCompassCalibrationElement
 * @extends {AoflElement}
 */
class IconSharpCompassCalibrationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCompassCalibrationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-compass-calibration';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCompassCalibrationElement.is, IconSharpCompassCalibrationElement);

export default IconSharpCompassCalibrationElement;
