import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVibrationElement
 * @class IconRoundVibrationElement
 * @extends {AoflElement}
 */
class IconRoundVibrationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVibrationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-vibration';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVibrationElement.is, IconRoundVibrationElement);

export default IconRoundVibrationElement;
