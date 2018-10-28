import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirlineSeatLegroomNormalElement
 * @class IconBaselineAirlineSeatLegroomNormalElement
 * @extends {AoflElement}
 */
class IconBaselineAirlineSeatLegroomNormalElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirlineSeatLegroomNormalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airline-seat-legroom-normal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirlineSeatLegroomNormalElement.is, IconBaselineAirlineSeatLegroomNormalElement);

export default IconBaselineAirlineSeatLegroomNormalElement;
