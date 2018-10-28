import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPowerSettingsNewElement
 * @class IconSharpPowerSettingsNewElement
 * @extends {AoflElement}
 */
class IconSharpPowerSettingsNewElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPowerSettingsNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-power-settings-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPowerSettingsNewElement.is, IconSharpPowerSettingsNewElement);

export default IconSharpPowerSettingsNewElement;
