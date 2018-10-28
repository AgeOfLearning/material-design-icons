import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirlineSeatFlatElement
 * @class IconSharpAirlineSeatFlatElement
 * @extends {AoflElement}
 */
class IconSharpAirlineSeatFlatElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirlineSeatFlatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airline-seat-flat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirlineSeatFlatElement.is, IconSharpAirlineSeatFlatElement);

export default IconSharpAirlineSeatFlatElement;
