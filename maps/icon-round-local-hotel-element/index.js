import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalHotelElement
 * @class IconRoundLocalHotelElement
 * @extends {AoflElement}
 */
class IconRoundLocalHotelElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalHotelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-hotel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalHotelElement.is, IconRoundLocalHotelElement);

export default IconRoundLocalHotelElement;
