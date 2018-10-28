import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsBrightnessElement
 * @class IconSharpSettingsBrightnessElement
 * @extends {AoflElement}
 */
class IconSharpSettingsBrightnessElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsBrightnessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-brightness';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsBrightnessElement.is, IconSharpSettingsBrightnessElement);

export default IconSharpSettingsBrightnessElement;
