import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhoneIphoneElement
 * @class IconSharpPhoneIphoneElement
 * @extends {AoflElement}
 */
class IconSharpPhoneIphoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhoneIphoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phone-iphone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhoneIphoneElement.is, IconSharpPhoneIphoneElement);

export default IconSharpPhoneIphoneElement;
