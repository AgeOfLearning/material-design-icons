import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineShoppingCartElement
 * @class IconOutlineShoppingCartElement
 * @extends {AoflElement}
 */
class IconOutlineShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineShoppingCartElement.is, IconOutlineShoppingCartElement);

export default IconOutlineShoppingCartElement;
