import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRemoveShoppingCartElement
 * @class IconOutlineRemoveShoppingCartElement
 * @extends {AoflElement}
 */
class IconOutlineRemoveShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRemoveShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-remove-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRemoveShoppingCartElement.is, IconOutlineRemoveShoppingCartElement);

export default IconOutlineRemoveShoppingCartElement;
