import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHotelElement
 * @class IconOutlineHotelElement
 * @extends {AoflElement}
 */
class IconOutlineHotelElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHotelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-hotel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHotelElement.is, IconOutlineHotelElement);

export default IconOutlineHotelElement;
