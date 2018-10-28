import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirlineSeatLegroomReducedElement
 * @class IconBaselineAirlineSeatLegroomReducedElement
 * @extends {AoflElement}
 */
class IconBaselineAirlineSeatLegroomReducedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirlineSeatLegroomReducedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airline-seat-legroom-reduced';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirlineSeatLegroomReducedElement.is, IconBaselineAirlineSeatLegroomReducedElement);

export default IconBaselineAirlineSeatLegroomReducedElement;
