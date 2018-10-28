import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRestaurantElement
 * @class IconOutlineRestaurantElement
 * @extends {AoflElement}
 */
class IconOutlineRestaurantElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRestaurantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-restaurant';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRestaurantElement.is, IconOutlineRestaurantElement);

export default IconOutlineRestaurantElement;
