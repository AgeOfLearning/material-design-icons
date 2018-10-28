import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsInputSvideoElement
 * @class IconTwotoneSettingsInputSvideoElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsInputSvideoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsInputSvideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-input-svideo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsInputSvideoElement.is, IconTwotoneSettingsInputSvideoElement);

export default IconTwotoneSettingsInputSvideoElement;
