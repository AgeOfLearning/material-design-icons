import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHotelElement
 * @class IconBaselineHotelElement
 * @extends {AoflElement}
 */
class IconBaselineHotelElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHotelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-hotel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHotelElement.is, IconBaselineHotelElement);

export default IconBaselineHotelElement;
