import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePowerSettingsNewElement
 * @class IconTwotonePowerSettingsNewElement
 * @extends {AoflElement}
 */
class IconTwotonePowerSettingsNewElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePowerSettingsNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-power-settings-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePowerSettingsNewElement.is, IconTwotonePowerSettingsNewElement);

export default IconTwotonePowerSettingsNewElement;
