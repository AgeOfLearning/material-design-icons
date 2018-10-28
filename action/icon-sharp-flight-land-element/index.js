import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlightLandElement
 * @class IconSharpFlightLandElement
 * @extends {AoflElement}
 */
class IconSharpFlightLandElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlightLandElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flight-land';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlightLandElement.is, IconSharpFlightLandElement);

export default IconSharpFlightLandElement;
