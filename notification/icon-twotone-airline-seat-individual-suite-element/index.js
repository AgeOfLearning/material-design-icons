import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirlineSeatIndividualSuiteElement
 * @class IconTwotoneAirlineSeatIndividualSuiteElement
 * @extends {AoflElement}
 */
class IconTwotoneAirlineSeatIndividualSuiteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirlineSeatIndividualSuiteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airline-seat-individual-suite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirlineSeatIndividualSuiteElement.is, IconTwotoneAirlineSeatIndividualSuiteElement);

export default IconTwotoneAirlineSeatIndividualSuiteElement;
