import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRestaurantMenuElement
 * @class IconSharpRestaurantMenuElement
 * @extends {AoflElement}
 */
class IconSharpRestaurantMenuElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRestaurantMenuElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-restaurant-menu';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRestaurantMenuElement.is, IconSharpRestaurantMenuElement);

export default IconSharpRestaurantMenuElement;
