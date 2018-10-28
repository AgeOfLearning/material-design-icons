import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRemoveShoppingCartElement
 * @class IconTwotoneRemoveShoppingCartElement
 * @extends {AoflElement}
 */
class IconTwotoneRemoveShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRemoveShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-remove-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRemoveShoppingCartElement.is, IconTwotoneRemoveShoppingCartElement);

export default IconTwotoneRemoveShoppingCartElement;
