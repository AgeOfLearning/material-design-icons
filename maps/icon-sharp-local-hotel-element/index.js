import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalHotelElement
 * @class IconSharpLocalHotelElement
 * @extends {AoflElement}
 */
class IconSharpLocalHotelElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalHotelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-hotel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalHotelElement.is, IconSharpLocalHotelElement);

export default IconSharpLocalHotelElement;
