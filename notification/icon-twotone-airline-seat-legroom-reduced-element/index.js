import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirlineSeatLegroomReducedElement
 * @class IconTwotoneAirlineSeatLegroomReducedElement
 * @extends {AoflElement}
 */
class IconTwotoneAirlineSeatLegroomReducedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirlineSeatLegroomReducedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airline-seat-legroom-reduced';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirlineSeatLegroomReducedElement.is, IconTwotoneAirlineSeatLegroomReducedElement);

export default IconTwotoneAirlineSeatLegroomReducedElement;
