import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirlineSeatIndividualSuiteElement
 * @class IconRoundAirlineSeatIndividualSuiteElement
 * @extends {AoflElement}
 */
class IconRoundAirlineSeatIndividualSuiteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirlineSeatIndividualSuiteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airline-seat-individual-suite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirlineSeatIndividualSuiteElement.is, IconRoundAirlineSeatIndividualSuiteElement);

export default IconRoundAirlineSeatIndividualSuiteElement;
