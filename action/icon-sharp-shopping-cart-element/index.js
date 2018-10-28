import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpShoppingCartElement
 * @class IconSharpShoppingCartElement
 * @extends {AoflElement}
 */
class IconSharpShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconSharpShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpShoppingCartElement.is, IconSharpShoppingCartElement);

export default IconSharpShoppingCartElement;
