import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPowerSettingsNewElement
 * @class IconRoundPowerSettingsNewElement
 * @extends {AoflElement}
 */
class IconRoundPowerSettingsNewElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPowerSettingsNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-power-settings-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPowerSettingsNewElement.is, IconRoundPowerSettingsNewElement);

export default IconRoundPowerSettingsNewElement;
