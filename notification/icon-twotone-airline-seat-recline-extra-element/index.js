import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirlineSeatReclineExtraElement
 * @class IconTwotoneAirlineSeatReclineExtraElement
 * @extends {AoflElement}
 */
class IconTwotoneAirlineSeatReclineExtraElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirlineSeatReclineExtraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airline-seat-recline-extra';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirlineSeatReclineExtraElement.is, IconTwotoneAirlineSeatReclineExtraElement);

export default IconTwotoneAirlineSeatReclineExtraElement;
