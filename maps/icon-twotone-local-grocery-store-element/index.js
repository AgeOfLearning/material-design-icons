import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalGroceryStoreElement
 * @class IconTwotoneLocalGroceryStoreElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalGroceryStoreElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalGroceryStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-grocery-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalGroceryStoreElement.is, IconTwotoneLocalGroceryStoreElement);

export default IconTwotoneLocalGroceryStoreElement;
