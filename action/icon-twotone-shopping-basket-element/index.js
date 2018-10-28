import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneShoppingBasketElement
 * @class IconTwotoneShoppingBasketElement
 * @extends {AoflElement}
 */
class IconTwotoneShoppingBasketElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneShoppingBasketElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-shopping-basket';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneShoppingBasketElement.is, IconTwotoneShoppingBasketElement);

export default IconTwotoneShoppingBasketElement;
