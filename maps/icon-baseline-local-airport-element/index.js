import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalAirportElement
 * @class IconBaselineLocalAirportElement
 * @extends {AoflElement}
 */
class IconBaselineLocalAirportElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalAirportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-airport';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalAirportElement.is, IconBaselineLocalAirportElement);

export default IconBaselineLocalAirportElement;
