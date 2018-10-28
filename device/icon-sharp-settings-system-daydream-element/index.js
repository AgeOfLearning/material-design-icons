import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsSystemDaydreamElement
 * @class IconSharpSettingsSystemDaydreamElement
 * @extends {AoflElement}
 */
class IconSharpSettingsSystemDaydreamElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsSystemDaydreamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-system-daydream';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsSystemDaydreamElement.is, IconSharpSettingsSystemDaydreamElement);

export default IconSharpSettingsSystemDaydreamElement;
