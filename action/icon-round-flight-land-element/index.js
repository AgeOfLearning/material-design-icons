import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlightLandElement
 * @class IconRoundFlightLandElement
 * @extends {AoflElement}
 */
class IconRoundFlightLandElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlightLandElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flight-land';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlightLandElement.is, IconRoundFlightLandElement);

export default IconRoundFlightLandElement;
