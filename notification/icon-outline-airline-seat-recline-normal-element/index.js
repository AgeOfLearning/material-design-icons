import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirlineSeatReclineNormalElement
 * @class IconOutlineAirlineSeatReclineNormalElement
 * @extends {AoflElement}
 */
class IconOutlineAirlineSeatReclineNormalElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirlineSeatReclineNormalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airline-seat-recline-normal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirlineSeatReclineNormalElement.is, IconOutlineAirlineSeatReclineNormalElement);

export default IconOutlineAirlineSeatReclineNormalElement;
