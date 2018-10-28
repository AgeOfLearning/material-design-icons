import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEnhancedEncryptionElement
 * @class IconBaselineEnhancedEncryptionElement
 * @extends {AoflElement}
 */
class IconBaselineEnhancedEncryptionElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEnhancedEncryptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-enhanced-encryption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEnhancedEncryptionElement.is, IconBaselineEnhancedEncryptionElement);

export default IconBaselineEnhancedEncryptionElement;
