import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFingerprintElement
 * @class IconSharpFingerprintElement
 * @extends {AoflElement}
 */
class IconSharpFingerprintElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFingerprintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fingerprint';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFingerprintElement.is, IconSharpFingerprintElement);

export default IconSharpFingerprintElement;
