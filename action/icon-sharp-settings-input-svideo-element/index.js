import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsInputSvideoElement
 * @class IconSharpSettingsInputSvideoElement
 * @extends {AoflElement}
 */
class IconSharpSettingsInputSvideoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsInputSvideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-input-svideo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsInputSvideoElement.is, IconSharpSettingsInputSvideoElement);

export default IconSharpSettingsInputSvideoElement;
