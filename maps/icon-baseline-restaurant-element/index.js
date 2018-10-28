import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRestaurantElement
 * @class IconBaselineRestaurantElement
 * @extends {AoflElement}
 */
class IconBaselineRestaurantElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRestaurantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-restaurant';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRestaurantElement.is, IconBaselineRestaurantElement);

export default IconBaselineRestaurantElement;
