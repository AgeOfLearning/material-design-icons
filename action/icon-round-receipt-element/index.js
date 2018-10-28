import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReceiptElement
 * @class IconRoundReceiptElement
 * @extends {AoflElement}
 */
class IconRoundReceiptElement extends AoflElement {
  /**
   * Creates an instance of IconRoundReceiptElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-receipt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReceiptElement.is, IconRoundReceiptElement);

export default IconRoundReceiptElement;
