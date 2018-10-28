import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirplanemodeInactiveElement
 * @class IconOutlineAirplanemodeInactiveElement
 * @extends {AoflElement}
 */
class IconOutlineAirplanemodeInactiveElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirplanemodeInactiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airplanemode-inactive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirplanemodeInactiveElement.is, IconOutlineAirplanemodeInactiveElement);

export default IconOutlineAirplanemodeInactiveElement;
