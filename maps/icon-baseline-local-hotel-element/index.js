import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalHotelElement
 * @class IconBaselineLocalHotelElement
 * @extends {AoflElement}
 */
class IconBaselineLocalHotelElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalHotelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-hotel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalHotelElement.is, IconBaselineLocalHotelElement);

export default IconBaselineLocalHotelElement;
