import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalGroceryStoreElement
 * @class IconOutlineLocalGroceryStoreElement
 * @extends {AoflElement}
 */
class IconOutlineLocalGroceryStoreElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalGroceryStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-grocery-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalGroceryStoreElement.is, IconOutlineLocalGroceryStoreElement);

export default IconOutlineLocalGroceryStoreElement;
