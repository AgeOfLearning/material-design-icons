import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNoEncryptionElement
 * @class IconRoundNoEncryptionElement
 * @extends {AoflElement}
 */
class IconRoundNoEncryptionElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNoEncryptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-no-encryption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNoEncryptionElement.is, IconRoundNoEncryptionElement);

export default IconRoundNoEncryptionElement;
