import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEnhancedEncryptionElement
 * @class IconSharpEnhancedEncryptionElement
 * @extends {AoflElement}
 */
class IconSharpEnhancedEncryptionElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEnhancedEncryptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-enhanced-encryption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEnhancedEncryptionElement.is, IconSharpEnhancedEncryptionElement);

export default IconSharpEnhancedEncryptionElement;
