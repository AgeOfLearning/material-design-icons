import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsInputAntennaElement
 * @class IconOutlineSettingsInputAntennaElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsInputAntennaElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsInputAntennaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-input-antenna';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsInputAntennaElement.is, IconOutlineSettingsInputAntennaElement);

export default IconOutlineSettingsInputAntennaElement;
