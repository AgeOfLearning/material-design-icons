import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalHotelElement
 * @class IconOutlineLocalHotelElement
 * @extends {AoflElement}
 */
class IconOutlineLocalHotelElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalHotelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-hotel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalHotelElement.is, IconOutlineLocalHotelElement);

export default IconOutlineLocalHotelElement;
