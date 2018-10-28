import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalAirportElement
 * @class IconTwotoneLocalAirportElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalAirportElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalAirportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-airport';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalAirportElement.is, IconTwotoneLocalAirportElement);

export default IconTwotoneLocalAirportElement;
