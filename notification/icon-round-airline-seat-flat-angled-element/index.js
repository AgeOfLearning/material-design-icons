import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirlineSeatFlatAngledElement
 * @class IconRoundAirlineSeatFlatAngledElement
 * @extends {AoflElement}
 */
class IconRoundAirlineSeatFlatAngledElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirlineSeatFlatAngledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airline-seat-flat-angled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirlineSeatFlatAngledElement.is, IconRoundAirlineSeatFlatAngledElement);

export default IconRoundAirlineSeatFlatAngledElement;
