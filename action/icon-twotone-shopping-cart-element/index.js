import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneShoppingCartElement
 * @class IconTwotoneShoppingCartElement
 * @extends {AoflElement}
 */
class IconTwotoneShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneShoppingCartElement.is, IconTwotoneShoppingCartElement);

export default IconTwotoneShoppingCartElement;
