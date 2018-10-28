import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirlineSeatLegroomExtraElement
 * @class IconBaselineAirlineSeatLegroomExtraElement
 * @extends {AoflElement}
 */
class IconBaselineAirlineSeatLegroomExtraElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirlineSeatLegroomExtraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airline-seat-legroom-extra';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirlineSeatLegroomExtraElement.is, IconBaselineAirlineSeatLegroomExtraElement);

export default IconBaselineAirlineSeatLegroomExtraElement;
