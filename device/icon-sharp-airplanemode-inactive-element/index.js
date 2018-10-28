import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirplanemodeInactiveElement
 * @class IconSharpAirplanemodeInactiveElement
 * @extends {AoflElement}
 */
class IconSharpAirplanemodeInactiveElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirplanemodeInactiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airplanemode-inactive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirplanemodeInactiveElement.is, IconSharpAirplanemodeInactiveElement);

export default IconSharpAirplanemodeInactiveElement;
