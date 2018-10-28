import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineShoppingBasketElement
 * @class IconOutlineShoppingBasketElement
 * @extends {AoflElement}
 */
class IconOutlineShoppingBasketElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineShoppingBasketElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-shopping-basket';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineShoppingBasketElement.is, IconOutlineShoppingBasketElement);

export default IconOutlineShoppingBasketElement;
