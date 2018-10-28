import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNfcElement
 * @class IconOutlineNfcElement
 * @extends {AoflElement}
 */
class IconOutlineNfcElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNfcElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-nfc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNfcElement.is, IconOutlineNfcElement);

export default IconOutlineNfcElement;
