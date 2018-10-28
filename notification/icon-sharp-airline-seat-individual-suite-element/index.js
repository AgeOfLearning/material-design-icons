import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirlineSeatIndividualSuiteElement
 * @class IconSharpAirlineSeatIndividualSuiteElement
 * @extends {AoflElement}
 */
class IconSharpAirlineSeatIndividualSuiteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirlineSeatIndividualSuiteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airline-seat-individual-suite';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirlineSeatIndividualSuiteElement.is, IconSharpAirlineSeatIndividualSuiteElement);

export default IconSharpAirlineSeatIndividualSuiteElement;
