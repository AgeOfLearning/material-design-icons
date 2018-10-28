import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirlineSeatFlatAngledElement
 * @class IconSharpAirlineSeatFlatAngledElement
 * @extends {AoflElement}
 */
class IconSharpAirlineSeatFlatAngledElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirlineSeatFlatAngledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airline-seat-flat-angled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirlineSeatFlatAngledElement.is, IconSharpAirlineSeatFlatAngledElement);

export default IconSharpAirlineSeatFlatAngledElement;
