import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRestaurantElement
 * @class IconSharpRestaurantElement
 * @extends {AoflElement}
 */
class IconSharpRestaurantElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRestaurantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-restaurant';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRestaurantElement.is, IconSharpRestaurantElement);

export default IconSharpRestaurantElement;
