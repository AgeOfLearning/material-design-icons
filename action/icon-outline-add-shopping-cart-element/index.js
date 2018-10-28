import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddShoppingCartElement
 * @class IconOutlineAddShoppingCartElement
 * @extends {AoflElement}
 */
class IconOutlineAddShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddShoppingCartElement.is, IconOutlineAddShoppingCartElement);

export default IconOutlineAddShoppingCartElement;
