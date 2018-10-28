import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirportShuttleElement
 * @class IconOutlineAirportShuttleElement
 * @extends {AoflElement}
 */
class IconOutlineAirportShuttleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirportShuttleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airport-shuttle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirportShuttleElement.is, IconOutlineAirportShuttleElement);

export default IconOutlineAirportShuttleElement;
