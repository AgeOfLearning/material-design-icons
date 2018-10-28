import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpShopTwoElement
 * @class IconSharpShopTwoElement
 * @extends {AoflElement}
 */
class IconSharpShopTwoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpShopTwoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-shop-two';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpShopTwoElement.is, IconSharpShopTwoElement);

export default IconSharpShopTwoElement;
