import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhoneCallbackElement
 * @class IconSharpPhoneCallbackElement
 * @extends {AoflElement}
 */
class IconSharpPhoneCallbackElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhoneCallbackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phone-callback';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhoneCallbackElement.is, IconSharpPhoneCallbackElement);

export default IconSharpPhoneCallbackElement;
