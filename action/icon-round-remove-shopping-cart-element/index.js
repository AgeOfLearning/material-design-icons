import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRemoveShoppingCartElement
 * @class IconRoundRemoveShoppingCartElement
 * @extends {AoflElement}
 */
class IconRoundRemoveShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRemoveShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-remove-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRemoveShoppingCartElement.is, IconRoundRemoveShoppingCartElement);

export default IconRoundRemoveShoppingCartElement;
