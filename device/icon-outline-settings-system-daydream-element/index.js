import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsSystemDaydreamElement
 * @class IconOutlineSettingsSystemDaydreamElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsSystemDaydreamElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsSystemDaydreamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-system-daydream';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsSystemDaydreamElement.is, IconOutlineSettingsSystemDaydreamElement);

export default IconOutlineSettingsSystemDaydreamElement;
