import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFlightLandElement
 * @class IconTwotoneFlightLandElement
 * @extends {AoflElement}
 */
class IconTwotoneFlightLandElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFlightLandElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-flight-land';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFlightLandElement.is, IconTwotoneFlightLandElement);

export default IconTwotoneFlightLandElement;
