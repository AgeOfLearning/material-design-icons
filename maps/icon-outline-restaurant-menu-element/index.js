import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRestaurantMenuElement
 * @class IconOutlineRestaurantMenuElement
 * @extends {AoflElement}
 */
class IconOutlineRestaurantMenuElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRestaurantMenuElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-restaurant-menu';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRestaurantMenuElement.is, IconOutlineRestaurantMenuElement);

export default IconOutlineRestaurantMenuElement;
