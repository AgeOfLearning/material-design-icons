import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirlineSeatLegroomReducedElement
 * @class IconRoundAirlineSeatLegroomReducedElement
 * @extends {AoflElement}
 */
class IconRoundAirlineSeatLegroomReducedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirlineSeatLegroomReducedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airline-seat-legroom-reduced';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirlineSeatLegroomReducedElement.is, IconRoundAirlineSeatLegroomReducedElement);

export default IconRoundAirlineSeatLegroomReducedElement;
