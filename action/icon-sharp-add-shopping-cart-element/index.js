import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddShoppingCartElement
 * @class IconSharpAddShoppingCartElement
 * @extends {AoflElement}
 */
class IconSharpAddShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddShoppingCartElement.is, IconSharpAddShoppingCartElement);

export default IconSharpAddShoppingCartElement;
