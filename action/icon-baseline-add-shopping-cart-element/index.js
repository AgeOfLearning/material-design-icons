import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddShoppingCartElement
 * @class IconBaselineAddShoppingCartElement
 * @extends {AoflElement}
 */
class IconBaselineAddShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddShoppingCartElement.is, IconBaselineAddShoppingCartElement);

export default IconBaselineAddShoppingCartElement;
