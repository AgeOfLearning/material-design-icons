import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddShoppingCartElement
 * @class IconRoundAddShoppingCartElement
 * @extends {AoflElement}
 */
class IconRoundAddShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddShoppingCartElement.is, IconRoundAddShoppingCartElement);

export default IconRoundAddShoppingCartElement;
