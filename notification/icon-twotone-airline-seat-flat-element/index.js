import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirlineSeatFlatElement
 * @class IconTwotoneAirlineSeatFlatElement
 * @extends {AoflElement}
 */
class IconTwotoneAirlineSeatFlatElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirlineSeatFlatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airline-seat-flat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirlineSeatFlatElement.is, IconTwotoneAirlineSeatFlatElement);

export default IconTwotoneAirlineSeatFlatElement;
