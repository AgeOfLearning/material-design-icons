import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEnhancedEncryptionElement
 * @class IconRoundEnhancedEncryptionElement
 * @extends {AoflElement}
 */
class IconRoundEnhancedEncryptionElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEnhancedEncryptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-enhanced-encryption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEnhancedEncryptionElement.is, IconRoundEnhancedEncryptionElement);

export default IconRoundEnhancedEncryptionElement;
