import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVibrationElement
 * @class IconBaselineVibrationElement
 * @extends {AoflElement}
 */
class IconBaselineVibrationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVibrationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-vibration';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVibrationElement.is, IconBaselineVibrationElement);

export default IconBaselineVibrationElement;
