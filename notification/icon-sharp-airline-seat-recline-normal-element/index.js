import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirlineSeatReclineNormalElement
 * @class IconSharpAirlineSeatReclineNormalElement
 * @extends {AoflElement}
 */
class IconSharpAirlineSeatReclineNormalElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirlineSeatReclineNormalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airline-seat-recline-normal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirlineSeatReclineNormalElement.is, IconSharpAirlineSeatReclineNormalElement);

export default IconSharpAirlineSeatReclineNormalElement;
