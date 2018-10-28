import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpShoppingBasketElement
 * @class IconSharpShoppingBasketElement
 * @extends {AoflElement}
 */
class IconSharpShoppingBasketElement extends AoflElement {
  /**
   * Creates an instance of IconSharpShoppingBasketElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-shopping-basket';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpShoppingBasketElement.is, IconSharpShoppingBasketElement);

export default IconSharpShoppingBasketElement;
