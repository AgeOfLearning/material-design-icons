import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRestaurantElement
 * @class IconTwotoneRestaurantElement
 * @extends {AoflElement}
 */
class IconTwotoneRestaurantElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRestaurantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-restaurant';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRestaurantElement.is, IconTwotoneRestaurantElement);

export default IconTwotoneRestaurantElement;
