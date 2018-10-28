import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCompassCalibrationElement
 * @class IconBaselineCompassCalibrationElement
 * @extends {AoflElement}
 */
class IconBaselineCompassCalibrationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCompassCalibrationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-compass-calibration';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCompassCalibrationElement.is, IconBaselineCompassCalibrationElement);

export default IconBaselineCompassCalibrationElement;
