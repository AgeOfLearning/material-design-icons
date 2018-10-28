import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalGroceryStoreElement
 * @class IconRoundLocalGroceryStoreElement
 * @extends {AoflElement}
 */
class IconRoundLocalGroceryStoreElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalGroceryStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-grocery-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalGroceryStoreElement.is, IconRoundLocalGroceryStoreElement);

export default IconRoundLocalGroceryStoreElement;
