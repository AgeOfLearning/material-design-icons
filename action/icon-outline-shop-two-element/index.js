import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineShopTwoElement
 * @class IconOutlineShopTwoElement
 * @extends {AoflElement}
 */
class IconOutlineShopTwoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineShopTwoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-shop-two';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineShopTwoElement.is, IconOutlineShopTwoElement);

export default IconOutlineShopTwoElement;
