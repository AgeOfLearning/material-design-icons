import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirportShuttleElement
 * @class IconRoundAirportShuttleElement
 * @extends {AoflElement}
 */
class IconRoundAirportShuttleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirportShuttleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airport-shuttle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirportShuttleElement.is, IconRoundAirportShuttleElement);

export default IconRoundAirportShuttleElement;
