import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReceiptElement
 * @class IconOutlineReceiptElement
 * @extends {AoflElement}
 */
class IconOutlineReceiptElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineReceiptElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-receipt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReceiptElement.is, IconOutlineReceiptElement);

export default IconOutlineReceiptElement;
