import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsSystemDaydreamElement
 * @class IconTwotoneSettingsSystemDaydreamElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsSystemDaydreamElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsSystemDaydreamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-system-daydream';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsSystemDaydreamElement.is, IconTwotoneSettingsSystemDaydreamElement);

export default IconTwotoneSettingsSystemDaydreamElement;
