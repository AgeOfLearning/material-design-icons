import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirlineSeatLegroomReducedElement
 * @class IconSharpAirlineSeatLegroomReducedElement
 * @extends {AoflElement}
 */
class IconSharpAirlineSeatLegroomReducedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirlineSeatLegroomReducedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airline-seat-legroom-reduced';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirlineSeatLegroomReducedElement.is, IconSharpAirlineSeatLegroomReducedElement);

export default IconSharpAirlineSeatLegroomReducedElement;
