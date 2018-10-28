import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalHotelElement
 * @class IconTwotoneLocalHotelElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalHotelElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalHotelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-hotel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalHotelElement.is, IconTwotoneLocalHotelElement);

export default IconTwotoneLocalHotelElement;
