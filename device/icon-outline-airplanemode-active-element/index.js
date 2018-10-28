import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAirplanemodeActiveElement
 * @class IconOutlineAirplanemodeActiveElement
 * @extends {AoflElement}
 */
class IconOutlineAirplanemodeActiveElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAirplanemodeActiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-airplanemode-active';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAirplanemodeActiveElement.is, IconOutlineAirplanemodeActiveElement);

export default IconOutlineAirplanemodeActiveElement;
