import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFingerprintElement
 * @class IconBaselineFingerprintElement
 * @extends {AoflElement}
 */
class IconBaselineFingerprintElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFingerprintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fingerprint';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFingerprintElement.is, IconBaselineFingerprintElement);

export default IconBaselineFingerprintElement;
