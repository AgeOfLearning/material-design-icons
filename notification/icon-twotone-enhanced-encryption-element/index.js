import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEnhancedEncryptionElement
 * @class IconTwotoneEnhancedEncryptionElement
 * @extends {AoflElement}
 */
class IconTwotoneEnhancedEncryptionElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEnhancedEncryptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-enhanced-encryption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEnhancedEncryptionElement.is, IconTwotoneEnhancedEncryptionElement);

export default IconTwotoneEnhancedEncryptionElement;
