import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsInputSvideoElement
 * @class IconOutlineSettingsInputSvideoElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsInputSvideoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsInputSvideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-input-svideo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsInputSvideoElement.is, IconOutlineSettingsInputSvideoElement);

export default IconOutlineSettingsInputSvideoElement;
