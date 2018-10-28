import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirlineSeatLegroomNormalElement
 * @class IconSharpAirlineSeatLegroomNormalElement
 * @extends {AoflElement}
 */
class IconSharpAirlineSeatLegroomNormalElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirlineSeatLegroomNormalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airline-seat-legroom-normal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirlineSeatLegroomNormalElement.is, IconSharpAirlineSeatLegroomNormalElement);

export default IconSharpAirlineSeatLegroomNormalElement;
