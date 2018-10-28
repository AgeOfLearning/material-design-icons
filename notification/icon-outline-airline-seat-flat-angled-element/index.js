import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirlineSeatFlatAngledElement
 * @class IconOutlineAirlineSeatFlatAngledElement
 * @extends {AoflElement}
 */
class IconOutlineAirlineSeatFlatAngledElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirlineSeatFlatAngledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airline-seat-flat-angled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirlineSeatFlatAngledElement.is, IconOutlineAirlineSeatFlatAngledElement);

export default IconOutlineAirlineSeatFlatAngledElement;
