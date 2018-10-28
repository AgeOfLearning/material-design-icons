import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirlineSeatFlatAngledElement
 * @class IconTwotoneAirlineSeatFlatAngledElement
 * @extends {AoflElement}
 */
class IconTwotoneAirlineSeatFlatAngledElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirlineSeatFlatAngledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airline-seat-flat-angled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirlineSeatFlatAngledElement.is, IconTwotoneAirlineSeatFlatAngledElement);

export default IconTwotoneAirlineSeatFlatAngledElement;
