import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneShopTwoElement
 * @class IconTwotoneShopTwoElement
 * @extends {AoflElement}
 */
class IconTwotoneShopTwoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneShopTwoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-shop-two';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneShopTwoElement.is, IconTwotoneShopTwoElement);

export default IconTwotoneShopTwoElement;
