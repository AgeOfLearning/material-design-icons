import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirlineSeatLegroomNormalElement
 * @class IconTwotoneAirlineSeatLegroomNormalElement
 * @extends {AoflElement}
 */
class IconTwotoneAirlineSeatLegroomNormalElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirlineSeatLegroomNormalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airline-seat-legroom-normal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirlineSeatLegroomNormalElement.is, IconTwotoneAirlineSeatLegroomNormalElement);

export default IconTwotoneAirlineSeatLegroomNormalElement;
