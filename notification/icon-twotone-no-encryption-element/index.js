import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNoEncryptionElement
 * @class IconTwotoneNoEncryptionElement
 * @extends {AoflElement}
 */
class IconTwotoneNoEncryptionElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNoEncryptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-no-encryption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNoEncryptionElement.is, IconTwotoneNoEncryptionElement);

export default IconTwotoneNoEncryptionElement;
