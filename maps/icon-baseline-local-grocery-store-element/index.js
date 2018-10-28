import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalGroceryStoreElement
 * @class IconBaselineLocalGroceryStoreElement
 * @extends {AoflElement}
 */
class IconBaselineLocalGroceryStoreElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalGroceryStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-grocery-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalGroceryStoreElement.is, IconBaselineLocalGroceryStoreElement);

export default IconBaselineLocalGroceryStoreElement;
