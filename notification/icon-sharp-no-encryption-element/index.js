import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNoEncryptionElement
 * @class IconSharpNoEncryptionElement
 * @extends {AoflElement}
 */
class IconSharpNoEncryptionElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNoEncryptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-no-encryption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNoEncryptionElement.is, IconSharpNoEncryptionElement);

export default IconSharpNoEncryptionElement;
