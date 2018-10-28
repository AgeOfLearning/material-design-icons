import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVibrationElement
 * @class IconOutlineVibrationElement
 * @extends {AoflElement}
 */
class IconOutlineVibrationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVibrationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-vibration';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVibrationElement.is, IconOutlineVibrationElement);

export default IconOutlineVibrationElement;
