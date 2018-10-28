import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAirportShuttleElement
 * @class IconBaselineAirportShuttleElement
 * @extends {AoflElement}
 */
class IconBaselineAirportShuttleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAirportShuttleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-airport-shuttle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAirportShuttleElement.is, IconBaselineAirportShuttleElement);

export default IconBaselineAirportShuttleElement;
