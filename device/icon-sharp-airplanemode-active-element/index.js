import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAirplanemodeActiveElement
 * @class IconSharpAirplanemodeActiveElement
 * @extends {AoflElement}
 */
class IconSharpAirplanemodeActiveElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAirplanemodeActiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-airplanemode-active';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAirplanemodeActiveElement.is, IconSharpAirplanemodeActiveElement);

export default IconSharpAirplanemodeActiveElement;
