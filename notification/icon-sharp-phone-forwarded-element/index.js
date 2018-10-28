import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhoneForwardedElement
 * @class IconSharpPhoneForwardedElement
 * @extends {AoflElement}
 */
class IconSharpPhoneForwardedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhoneForwardedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phone-forwarded';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhoneForwardedElement.is, IconSharpPhoneForwardedElement);

export default IconSharpPhoneForwardedElement;
