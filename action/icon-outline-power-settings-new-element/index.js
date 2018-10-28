import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePowerSettingsNewElement
 * @class IconOutlinePowerSettingsNewElement
 * @extends {AoflElement}
 */
class IconOutlinePowerSettingsNewElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePowerSettingsNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-power-settings-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePowerSettingsNewElement.is, IconOutlinePowerSettingsNewElement);

export default IconOutlinePowerSettingsNewElement;
