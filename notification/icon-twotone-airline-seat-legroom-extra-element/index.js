import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirlineSeatLegroomExtraElement
 * @class IconTwotoneAirlineSeatLegroomExtraElement
 * @extends {AoflElement}
 */
class IconTwotoneAirlineSeatLegroomExtraElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirlineSeatLegroomExtraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airline-seat-legroom-extra';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirlineSeatLegroomExtraElement.is, IconTwotoneAirlineSeatLegroomExtraElement);

export default IconTwotoneAirlineSeatLegroomExtraElement;
