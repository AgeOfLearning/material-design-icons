import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineShopElement
 * @class IconOutlineShopElement
 * @extends {AoflElement}
 */
class IconOutlineShopElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineShopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-shop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineShopElement.is, IconOutlineShopElement);

export default IconOutlineShopElement;
