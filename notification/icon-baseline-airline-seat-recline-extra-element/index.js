import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirlineSeatReclineExtraElement
 * @class IconBaselineAirlineSeatReclineExtraElement
 * @extends {AoflElement}
 */
class IconBaselineAirlineSeatReclineExtraElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirlineSeatReclineExtraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airline-seat-recline-extra';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirlineSeatReclineExtraElement.is, IconBaselineAirlineSeatReclineExtraElement);

export default IconBaselineAirlineSeatReclineExtraElement;
