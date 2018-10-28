import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirlineSeatLegroomExtraElement
 * @class IconRoundAirlineSeatLegroomExtraElement
 * @extends {AoflElement}
 */
class IconRoundAirlineSeatLegroomExtraElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirlineSeatLegroomExtraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airline-seat-legroom-extra';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirlineSeatLegroomExtraElement.is, IconRoundAirlineSeatLegroomExtraElement);

export default IconRoundAirlineSeatLegroomExtraElement;
