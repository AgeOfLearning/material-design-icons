import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFlightLandElement
 * @class IconOutlineFlightLandElement
 * @extends {AoflElement}
 */
class IconOutlineFlightLandElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFlightLandElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-flight-land';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFlightLandElement.is, IconOutlineFlightLandElement);

export default IconOutlineFlightLandElement;
