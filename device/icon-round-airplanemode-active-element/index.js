import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAirplanemodeActiveElement
 * @class IconRoundAirplanemodeActiveElement
 * @extends {AoflElement}
 */
class IconRoundAirplanemodeActiveElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAirplanemodeActiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-airplanemode-active';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAirplanemodeActiveElement.is, IconRoundAirplanemodeActiveElement);

export default IconRoundAirplanemodeActiveElement;
