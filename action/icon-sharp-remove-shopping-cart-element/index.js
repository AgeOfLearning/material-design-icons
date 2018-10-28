import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRemoveShoppingCartElement
 * @class IconSharpRemoveShoppingCartElement
 * @extends {AoflElement}
 */
class IconSharpRemoveShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRemoveShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-remove-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRemoveShoppingCartElement.is, IconSharpRemoveShoppingCartElement);

export default IconSharpRemoveShoppingCartElement;
