import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsBrightnessElement
 * @class IconRoundSettingsBrightnessElement
 * @extends {AoflElement}
 */
class IconRoundSettingsBrightnessElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsBrightnessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-brightness';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsBrightnessElement.is, IconRoundSettingsBrightnessElement);

export default IconRoundSettingsBrightnessElement;
