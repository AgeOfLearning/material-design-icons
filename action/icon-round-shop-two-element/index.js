import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundShopTwoElement
 * @class IconRoundShopTwoElement
 * @extends {AoflElement}
 */
class IconRoundShopTwoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundShopTwoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-shop-two';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundShopTwoElement.is, IconRoundShopTwoElement);

export default IconRoundShopTwoElement;
