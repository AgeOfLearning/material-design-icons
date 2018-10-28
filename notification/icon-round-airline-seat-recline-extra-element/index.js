import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirlineSeatReclineExtraElement
 * @class IconRoundAirlineSeatReclineExtraElement
 * @extends {AoflElement}
 */
class IconRoundAirlineSeatReclineExtraElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirlineSeatReclineExtraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airline-seat-recline-extra';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirlineSeatReclineExtraElement.is, IconRoundAirlineSeatReclineExtraElement);

export default IconRoundAirlineSeatReclineExtraElement;
