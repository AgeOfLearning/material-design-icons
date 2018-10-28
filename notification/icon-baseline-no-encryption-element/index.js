import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNoEncryptionElement
 * @class IconBaselineNoEncryptionElement
 * @extends {AoflElement}
 */
class IconBaselineNoEncryptionElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNoEncryptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-no-encryption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNoEncryptionElement.is, IconBaselineNoEncryptionElement);

export default IconBaselineNoEncryptionElement;
