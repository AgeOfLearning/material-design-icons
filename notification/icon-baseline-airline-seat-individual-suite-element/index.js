import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirlineSeatIndividualSuiteElement
 * @class IconBaselineAirlineSeatIndividualSuiteElement
 * @extends {AoflElement}
 */
class IconBaselineAirlineSeatIndividualSuiteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirlineSeatIndividualSuiteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airline-seat-individual-suite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirlineSeatIndividualSuiteElement.is, IconBaselineAirlineSeatIndividualSuiteElement);

export default IconBaselineAirlineSeatIndividualSuiteElement;
