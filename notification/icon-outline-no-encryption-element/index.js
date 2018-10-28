import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNoEncryptionElement
 * @class IconOutlineNoEncryptionElement
 * @extends {AoflElement}
 */
class IconOutlineNoEncryptionElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNoEncryptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-no-encryption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNoEncryptionElement.is, IconOutlineNoEncryptionElement);

export default IconOutlineNoEncryptionElement;
