import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHotelElement
 * @class IconRoundHotelElement
 * @extends {AoflElement}
 */
class IconRoundHotelElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHotelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-hotel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHotelElement.is, IconRoundHotelElement);

export default IconRoundHotelElement;
