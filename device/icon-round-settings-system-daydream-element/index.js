import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsSystemDaydreamElement
 * @class IconRoundSettingsSystemDaydreamElement
 * @extends {AoflElement}
 */
class IconRoundSettingsSystemDaydreamElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsSystemDaydreamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-system-daydream';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsSystemDaydreamElement.is, IconRoundSettingsSystemDaydreamElement);

export default IconRoundSettingsSystemDaydreamElement;
