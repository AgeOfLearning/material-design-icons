import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhoneAndroidElement
 * @class IconSharpPhoneAndroidElement
 * @extends {AoflElement}
 */
class IconSharpPhoneAndroidElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhoneAndroidElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phone-android';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhoneAndroidElement.is, IconSharpPhoneAndroidElement);

export default IconSharpPhoneAndroidElement;
