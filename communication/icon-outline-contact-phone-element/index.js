import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineContactPhoneElement
 * @class IconOutlineContactPhoneElement
 * @extends {AoflElement}
 */
class IconOutlineContactPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineContactPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-contact-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineContactPhoneElement.is, IconOutlineContactPhoneElement);

export default IconOutlineContactPhoneElement;
