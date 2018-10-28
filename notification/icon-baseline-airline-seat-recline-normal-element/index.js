import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirlineSeatReclineNormalElement
 * @class IconBaselineAirlineSeatReclineNormalElement
 * @extends {AoflElement}
 */
class IconBaselineAirlineSeatReclineNormalElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirlineSeatReclineNormalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airline-seat-recline-normal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirlineSeatReclineNormalElement.is, IconBaselineAirlineSeatReclineNormalElement);

export default IconBaselineAirlineSeatReclineNormalElement;
