import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirlineSeatLegroomExtraElement
 * @class IconSharpAirlineSeatLegroomExtraElement
 * @extends {AoflElement}
 */
class IconSharpAirlineSeatLegroomExtraElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirlineSeatLegroomExtraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airline-seat-legroom-extra';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirlineSeatLegroomExtraElement.is, IconSharpAirlineSeatLegroomExtraElement);

export default IconSharpAirlineSeatLegroomExtraElement;
