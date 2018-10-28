import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhoneIphoneElement
 * @class IconOutlinePhoneIphoneElement
 * @extends {AoflElement}
 */
class IconOutlinePhoneIphoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhoneIphoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phone-iphone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhoneIphoneElement.is, IconOutlinePhoneIphoneElement);

export default IconOutlinePhoneIphoneElement;
