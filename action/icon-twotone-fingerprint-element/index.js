import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFingerprintElement
 * @class IconTwotoneFingerprintElement
 * @extends {AoflElement}
 */
class IconTwotoneFingerprintElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFingerprintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fingerprint';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFingerprintElement.is, IconTwotoneFingerprintElement);

export default IconTwotoneFingerprintElement;
