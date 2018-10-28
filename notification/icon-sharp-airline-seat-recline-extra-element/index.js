import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirlineSeatReclineExtraElement
 * @class IconSharpAirlineSeatReclineExtraElement
 * @extends {AoflElement}
 */
class IconSharpAirlineSeatReclineExtraElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirlineSeatReclineExtraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airline-seat-recline-extra';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirlineSeatReclineExtraElement.is, IconSharpAirlineSeatReclineExtraElement);

export default IconSharpAirlineSeatReclineExtraElement;
