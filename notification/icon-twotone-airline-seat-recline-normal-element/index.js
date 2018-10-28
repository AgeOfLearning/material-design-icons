import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirlineSeatReclineNormalElement
 * @class IconTwotoneAirlineSeatReclineNormalElement
 * @extends {AoflElement}
 */
class IconTwotoneAirlineSeatReclineNormalElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirlineSeatReclineNormalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airline-seat-recline-normal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirlineSeatReclineNormalElement.is, IconTwotoneAirlineSeatReclineNormalElement);

export default IconTwotoneAirlineSeatReclineNormalElement;
