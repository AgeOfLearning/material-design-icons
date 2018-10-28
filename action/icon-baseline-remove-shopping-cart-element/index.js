import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRemoveShoppingCartElement
 * @class IconBaselineRemoveShoppingCartElement
 * @extends {AoflElement}
 */
class IconBaselineRemoveShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRemoveShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-remove-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRemoveShoppingCartElement.is, IconBaselineRemoveShoppingCartElement);

export default IconBaselineRemoveShoppingCartElement;
