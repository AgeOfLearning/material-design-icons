import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddShoppingCartElement
 * @class IconTwotoneAddShoppingCartElement
 * @extends {AoflElement}
 */
class IconTwotoneAddShoppingCartElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddShoppingCartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-shopping-cart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddShoppingCartElement.is, IconTwotoneAddShoppingCartElement);

export default IconTwotoneAddShoppingCartElement;
