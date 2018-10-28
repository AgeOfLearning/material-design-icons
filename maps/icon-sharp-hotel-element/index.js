import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHotelElement
 * @class IconSharpHotelElement
 * @extends {AoflElement}
 */
class IconSharpHotelElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHotelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-hotel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHotelElement.is, IconSharpHotelElement);

export default IconSharpHotelElement;
