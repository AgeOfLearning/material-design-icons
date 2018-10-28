import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirportShuttleElement
 * @class IconTwotoneAirportShuttleElement
 * @extends {AoflElement}
 */
class IconTwotoneAirportShuttleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirportShuttleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airport-shuttle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirportShuttleElement.is, IconTwotoneAirportShuttleElement);

export default IconTwotoneAirportShuttleElement;
