import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpContactPhoneElement
 * @class IconSharpContactPhoneElement
 * @extends {AoflElement}
 */
class IconSharpContactPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpContactPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-contact-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpContactPhoneElement.is, IconSharpContactPhoneElement);

export default IconSharpContactPhoneElement;
