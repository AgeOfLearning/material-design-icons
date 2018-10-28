import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReceiptElement
 * @class IconSharpReceiptElement
 * @extends {AoflElement}
 */
class IconSharpReceiptElement extends AoflElement {
  /**
   * Creates an instance of IconSharpReceiptElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-receipt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReceiptElement.is, IconSharpReceiptElement);

export default IconSharpReceiptElement;
