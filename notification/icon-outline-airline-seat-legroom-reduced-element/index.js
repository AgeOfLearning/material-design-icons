import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirlineSeatLegroomReducedElement
 * @class IconOutlineAirlineSeatLegroomReducedElement
 * @extends {AoflElement}
 */
class IconOutlineAirlineSeatLegroomReducedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirlineSeatLegroomReducedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airline-seat-legroom-reduced';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirlineSeatLegroomReducedElement.is, IconOutlineAirlineSeatLegroomReducedElement);

export default IconOutlineAirlineSeatLegroomReducedElement;
