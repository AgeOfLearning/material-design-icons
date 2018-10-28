import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHotelElement
 * @class IconTwotoneHotelElement
 * @extends {AoflElement}
 */
class IconTwotoneHotelElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHotelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-hotel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHotelElement.is, IconTwotoneHotelElement);

export default IconTwotoneHotelElement;
