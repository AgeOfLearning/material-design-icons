import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirlineSeatReclineExtraElement
 * @class IconOutlineAirlineSeatReclineExtraElement
 * @extends {AoflElement}
 */
class IconOutlineAirlineSeatReclineExtraElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirlineSeatReclineExtraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airline-seat-recline-extra';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirlineSeatReclineExtraElement.is, IconOutlineAirlineSeatReclineExtraElement);

export default IconOutlineAirlineSeatReclineExtraElement;
