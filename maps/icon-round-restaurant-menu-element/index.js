import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRestaurantMenuElement
 * @class IconRoundRestaurantMenuElement
 * @extends {AoflElement}
 */
class IconRoundRestaurantMenuElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRestaurantMenuElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-restaurant-menu';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRestaurantMenuElement.is, IconRoundRestaurantMenuElement);

export default IconRoundRestaurantMenuElement;
