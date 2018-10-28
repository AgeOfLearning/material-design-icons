import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneContactPhoneElement
 * @class IconTwotoneContactPhoneElement
 * @extends {AoflElement}
 */
class IconTwotoneContactPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneContactPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-contact-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneContactPhoneElement.is, IconTwotoneContactPhoneElement);

export default IconTwotoneContactPhoneElement;
