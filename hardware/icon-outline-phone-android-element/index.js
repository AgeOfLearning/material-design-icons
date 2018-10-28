import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhoneAndroidElement
 * @class IconOutlinePhoneAndroidElement
 * @extends {AoflElement}
 */
class IconOutlinePhoneAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhoneAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phone-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhoneAndroidElement.is, IconOutlinePhoneAndroidElement);

export default IconOutlinePhoneAndroidElement;
