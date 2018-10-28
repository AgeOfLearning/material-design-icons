import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFingerprintElement
 * @class IconOutlineFingerprintElement
 * @extends {AoflElement}
 */
class IconOutlineFingerprintElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFingerprintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fingerprint';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFingerprintElement.is, IconOutlineFingerprintElement);

export default IconOutlineFingerprintElement;
