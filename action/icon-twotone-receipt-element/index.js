import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReceiptElement
 * @class IconTwotoneReceiptElement
 * @extends {AoflElement}
 */
class IconTwotoneReceiptElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReceiptElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-receipt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReceiptElement.is, IconTwotoneReceiptElement);

export default IconTwotoneReceiptElement;
