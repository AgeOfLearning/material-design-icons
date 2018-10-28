import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirplanemodeInactiveElement
 * @class IconRoundAirplanemodeInactiveElement
 * @extends {AoflElement}
 */
class IconRoundAirplanemodeInactiveElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirplanemodeInactiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airplanemode-inactive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirplanemodeInactiveElement.is, IconRoundAirplanemodeInactiveElement);

export default IconRoundAirplanemodeInactiveElement;
