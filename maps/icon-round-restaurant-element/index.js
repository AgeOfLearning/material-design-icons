import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRestaurantElement
 * @class IconRoundRestaurantElement
 * @extends {AoflElement}
 */
class IconRoundRestaurantElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRestaurantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-restaurant';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRestaurantElement.is, IconRoundRestaurantElement);

export default IconRoundRestaurantElement;
