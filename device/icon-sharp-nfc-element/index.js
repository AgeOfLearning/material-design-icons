import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNfcElement
 * @class IconSharpNfcElement
 * @extends {AoflElement}
 */
class IconSharpNfcElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNfcElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-nfc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNfcElement.is, IconSharpNfcElement);

export default IconSharpNfcElement;
