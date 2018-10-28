import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineShoppingCartElement
 * @class IconBaselineShoppingCartElement
 * @extends {AoflElement}
 */
class IconBaselineShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineShoppingCartElement.is, IconBaselineShoppingCartElement);

export default IconBaselineShoppingCartElement;
