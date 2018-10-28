import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineShoppingBasketElement
 * @class IconBaselineShoppingBasketElement
 * @extends {AoflElement}
 */
class IconBaselineShoppingBasketElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineShoppingBasketElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-shopping-basket';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineShoppingBasketElement.is, IconBaselineShoppingBasketElement);

export default IconBaselineShoppingBasketElement;
