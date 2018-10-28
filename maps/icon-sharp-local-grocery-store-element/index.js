import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalGroceryStoreElement
 * @class IconSharpLocalGroceryStoreElement
 * @extends {AoflElement}
 */
class IconSharpLocalGroceryStoreElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalGroceryStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-grocery-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalGroceryStoreElement.is, IconSharpLocalGroceryStoreElement);

export default IconSharpLocalGroceryStoreElement;
