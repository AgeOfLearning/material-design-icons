import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineShopTwoElement
 * @class IconBaselineShopTwoElement
 * @extends {AoflElement}
 */
class IconBaselineShopTwoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineShopTwoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-shop-two';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineShopTwoElement.is, IconBaselineShopTwoElement);

export default IconBaselineShopTwoElement;
