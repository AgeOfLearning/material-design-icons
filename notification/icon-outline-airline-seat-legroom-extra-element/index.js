import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirlineSeatLegroomExtraElement
 * @class IconOutlineAirlineSeatLegroomExtraElement
 * @extends {AoflElement}
 */
class IconOutlineAirlineSeatLegroomExtraElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirlineSeatLegroomExtraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airline-seat-legroom-extra';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirlineSeatLegroomExtraElement.is, IconOutlineAirlineSeatLegroomExtraElement);

export default IconOutlineAirlineSeatLegroomExtraElement;
