import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRestaurantMenuElement
 * @class IconBaselineRestaurantMenuElement
 * @extends {AoflElement}
 */
class IconBaselineRestaurantMenuElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRestaurantMenuElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-restaurant-menu';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRestaurantMenuElement.is, IconBaselineRestaurantMenuElement);

export default IconBaselineRestaurantMenuElement;
