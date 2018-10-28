import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirlineSeatIndividualSuiteElement
 * @class IconOutlineAirlineSeatIndividualSuiteElement
 * @extends {AoflElement}
 */
class IconOutlineAirlineSeatIndividualSuiteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirlineSeatIndividualSuiteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airline-seat-individual-suite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirlineSeatIndividualSuiteElement.is, IconOutlineAirlineSeatIndividualSuiteElement);

export default IconOutlineAirlineSeatIndividualSuiteElement;
