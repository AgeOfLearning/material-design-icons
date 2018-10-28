import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPowerInputElement
 * @class IconSharpPowerInputElement
 * @extends {AoflElement}
 */
class IconSharpPowerInputElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPowerInputElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-power-input';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPowerInputElement.is, IconSharpPowerInputElement);

export default IconSharpPowerInputElement;
