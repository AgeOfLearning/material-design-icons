import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPowerOffElement
 * @class IconSharpPowerOffElement
 * @extends {AoflElement}
 */
class IconSharpPowerOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPowerOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-power-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPowerOffElement.is, IconSharpPowerOffElement);

export default IconSharpPowerOffElement;
