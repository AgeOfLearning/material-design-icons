import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEnhancedEncryptionElement
 * @class IconOutlineEnhancedEncryptionElement
 * @extends {AoflElement}
 */
class IconOutlineEnhancedEncryptionElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEnhancedEncryptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-enhanced-encryption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEnhancedEncryptionElement.is, IconOutlineEnhancedEncryptionElement);

export default IconOutlineEnhancedEncryptionElement;
