import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReceiptElement
 * @class IconBaselineReceiptElement
 * @extends {AoflElement}
 */
class IconBaselineReceiptElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineReceiptElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-receipt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReceiptElement.is, IconBaselineReceiptElement);

export default IconBaselineReceiptElement;
