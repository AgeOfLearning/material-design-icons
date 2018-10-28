import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirlineSeatFlatAngledElement
 * @class IconBaselineAirlineSeatFlatAngledElement
 * @extends {AoflElement}
 */
class IconBaselineAirlineSeatFlatAngledElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirlineSeatFlatAngledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airline-seat-flat-angled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirlineSeatFlatAngledElement.is, IconBaselineAirlineSeatFlatAngledElement);

export default IconBaselineAirlineSeatFlatAngledElement;
