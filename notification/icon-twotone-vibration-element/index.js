import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVibrationElement
 * @class IconTwotoneVibrationElement
 * @extends {AoflElement}
 */
class IconTwotoneVibrationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVibrationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-vibration';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVibrationElement.is, IconTwotoneVibrationElement);

export default IconTwotoneVibrationElement;
