import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirlineSeatFlatElement
 * @class IconRoundAirlineSeatFlatElement
 * @extends {AoflElement}
 */
class IconRoundAirlineSeatFlatElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirlineSeatFlatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airline-seat-flat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirlineSeatFlatElement.is, IconRoundAirlineSeatFlatElement);

export default IconRoundAirlineSeatFlatElement;
