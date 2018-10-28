import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhoneAndroidElement
 * @class IconTwotonePhoneAndroidElement
 * @extends {AoflElement}
 */
class IconTwotonePhoneAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhoneAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phone-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhoneAndroidElement.is, IconTwotonePhoneAndroidElement);

export default IconTwotonePhoneAndroidElement;
