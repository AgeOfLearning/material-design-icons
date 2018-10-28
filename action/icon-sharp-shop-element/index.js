import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpShopElement
 * @class IconSharpShopElement
 * @extends {AoflElement}
 */
class IconSharpShopElement extends AoflElement {
  /**
   * Creates an instance of IconSharpShopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-shop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpShopElement.is, IconSharpShopElement);

export default IconSharpShopElement;
