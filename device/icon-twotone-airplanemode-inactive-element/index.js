import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirplanemodeInactiveElement
 * @class IconTwotoneAirplanemodeInactiveElement
 * @extends {AoflElement}
 */
class IconTwotoneAirplanemodeInactiveElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirplanemodeInactiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airplanemode-inactive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirplanemodeInactiveElement.is, IconTwotoneAirplanemodeInactiveElement);

export default IconTwotoneAirplanemodeInactiveElement;
