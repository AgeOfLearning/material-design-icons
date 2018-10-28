import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsBrightnessElement
 * @class IconTwotoneSettingsBrightnessElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsBrightnessElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsBrightnessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-brightness';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsBrightnessElement.is, IconTwotoneSettingsBrightnessElement);

export default IconTwotoneSettingsBrightnessElement;
