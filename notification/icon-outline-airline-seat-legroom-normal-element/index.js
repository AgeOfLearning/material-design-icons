import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirlineSeatLegroomNormalElement
 * @class IconOutlineAirlineSeatLegroomNormalElement
 * @extends {AoflElement}
 */
class IconOutlineAirlineSeatLegroomNormalElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirlineSeatLegroomNormalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airline-seat-legroom-normal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirlineSeatLegroomNormalElement.is, IconOutlineAirlineSeatLegroomNormalElement);

export default IconOutlineAirlineSeatLegroomNormalElement;
