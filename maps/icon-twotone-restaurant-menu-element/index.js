import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRestaurantMenuElement
 * @class IconTwotoneRestaurantMenuElement
 * @extends {AoflElement}
 */
class IconTwotoneRestaurantMenuElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRestaurantMenuElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-restaurant-menu';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRestaurantMenuElement.is, IconTwotoneRestaurantMenuElement);

export default IconTwotoneRestaurantMenuElement;
