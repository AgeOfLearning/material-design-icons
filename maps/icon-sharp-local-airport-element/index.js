import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalAirportElement
 * @class IconSharpLocalAirportElement
 * @extends {AoflElement}
 */
class IconSharpLocalAirportElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalAirportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-airport';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalAirportElement.is, IconSharpLocalAirportElement);

export default IconSharpLocalAirportElement;
