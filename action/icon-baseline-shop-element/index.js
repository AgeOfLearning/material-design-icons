import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineShopElement
 * @class IconBaselineShopElement
 * @extends {AoflElement}
 */
class IconBaselineShopElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineShopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-shop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineShopElement.is, IconBaselineShopElement);

export default IconBaselineShopElement;
