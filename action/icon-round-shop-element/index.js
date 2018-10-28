import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundShopElement
 * @class IconRoundShopElement
 * @extends {AoflElement}
 */
class IconRoundShopElement extends AoflElement {
  /**
   * Creates an instance of IconRoundShopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-shop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundShopElement.is, IconRoundShopElement);

export default IconRoundShopElement;
