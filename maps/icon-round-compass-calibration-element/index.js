import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCompassCalibrationElement
 * @class IconRoundCompassCalibrationElement
 * @extends {AoflElement}
 */
class IconRoundCompassCalibrationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCompassCalibrationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-compass-calibration';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCompassCalibrationElement.is, IconRoundCompassCalibrationElement);

export default IconRoundCompassCalibrationElement;
