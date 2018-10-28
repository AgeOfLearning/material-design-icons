import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAirplanemodeActiveElement
 * @class IconTwotoneAirplanemodeActiveElement
 * @extends {AoflElement}
 */
class IconTwotoneAirplanemodeActiveElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAirplanemodeActiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-airplanemode-active';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAirplanemodeActiveElement.is, IconTwotoneAirplanemodeActiveElement);

export default IconTwotoneAirplanemodeActiveElement;
