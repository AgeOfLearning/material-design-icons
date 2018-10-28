import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsInputComponentElement
 * @class IconOutlineSettingsInputComponentElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsInputComponentElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsInputComponentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-input-component';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsInputComponentElement.is, IconOutlineSettingsInputComponentElement);

export default IconOutlineSettingsInputComponentElement;
