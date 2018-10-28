import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNfcElement
 * @class IconTwotoneNfcElement
 * @extends {AoflElement}
 */
class IconTwotoneNfcElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNfcElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-nfc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNfcElement.is, IconTwotoneNfcElement);

export default IconTwotoneNfcElement;
