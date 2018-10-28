import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirlineSeatFlatElement
 * @class IconOutlineAirlineSeatFlatElement
 * @extends {AoflElement}
 */
class IconOutlineAirlineSeatFlatElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirlineSeatFlatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airline-seat-flat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirlineSeatFlatElement.is, IconOutlineAirlineSeatFlatElement);

export default IconOutlineAirlineSeatFlatElement;
