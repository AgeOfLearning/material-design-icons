import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhoneIphoneElement
 * @class IconTwotonePhoneIphoneElement
 * @extends {AoflElement}
 */
class IconTwotonePhoneIphoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhoneIphoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phone-iphone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhoneIphoneElement.is, IconTwotonePhoneIphoneElement);

export default IconTwotonePhoneIphoneElement;
