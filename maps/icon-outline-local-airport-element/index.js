import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalAirportElement
 * @class IconOutlineLocalAirportElement
 * @extends {AoflElement}
 */
class IconOutlineLocalAirportElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalAirportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-airport';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalAirportElement.is, IconOutlineLocalAirportElement);

export default IconOutlineLocalAirportElement;
