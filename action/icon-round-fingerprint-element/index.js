import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFingerprintElement
 * @class IconRoundFingerprintElement
 * @extends {AoflElement}
 */
class IconRoundFingerprintElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFingerprintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fingerprint';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFingerprintElement.is, IconRoundFingerprintElement);

export default IconRoundFingerprintElement;
