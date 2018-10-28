import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalAirportElement
 * @class IconRoundLocalAirportElement
 * @extends {AoflElement}
 */
class IconRoundLocalAirportElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalAirportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-airport';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalAirportElement.is, IconRoundLocalAirportElement);

export default IconRoundLocalAirportElement;
