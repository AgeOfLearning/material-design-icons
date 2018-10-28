import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirportShuttleElement
 * @class IconSharpAirportShuttleElement
 * @extends {AoflElement}
 */
class IconSharpAirportShuttleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirportShuttleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airport-shuttle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirportShuttleElement.is, IconSharpAirportShuttleElement);

export default IconSharpAirportShuttleElement;
