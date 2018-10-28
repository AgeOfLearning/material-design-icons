import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirlineSeatLegroomNormalElement
 * @class IconRoundAirlineSeatLegroomNormalElement
 * @extends {AoflElement}
 */
class IconRoundAirlineSeatLegroomNormalElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirlineSeatLegroomNormalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airline-seat-legroom-normal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirlineSeatLegroomNormalElement.is, IconRoundAirlineSeatLegroomNormalElement);

export default IconRoundAirlineSeatLegroomNormalElement;
