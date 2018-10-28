import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirlineSeatReclineNormalElement
 * @class IconRoundAirlineSeatReclineNormalElement
 * @extends {AoflElement}
 */
class IconRoundAirlineSeatReclineNormalElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirlineSeatReclineNormalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airline-seat-recline-normal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirlineSeatReclineNormalElement.is, IconRoundAirlineSeatReclineNormalElement);

export default IconRoundAirlineSeatReclineNormalElement;
