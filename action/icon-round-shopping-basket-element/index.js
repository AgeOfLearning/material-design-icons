import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundShoppingBasketElement
 * @class IconRoundShoppingBasketElement
 * @extends {AoflElement}
 */
class IconRoundShoppingBasketElement extends AoflElement {
  /**
   * Creates an instance of IconRoundShoppingBasketElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-shopping-basket';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundShoppingBasketElement.is, IconRoundShoppingBasketElement);

export default IconRoundShoppingBasketElement;
