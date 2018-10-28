import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundShoppingCartElement
 * @class IconRoundShoppingCartElement
 * @extends {AoflElement}
 */
class IconRoundShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconRoundShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundShoppingCartElement.is, IconRoundShoppingCartElement);

export default IconRoundShoppingCartElement;
