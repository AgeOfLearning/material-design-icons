import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsInputSvideoElement
 * @class IconRoundSettingsInputSvideoElement
 * @extends {AoflElement}
 */
class IconRoundSettingsInputSvideoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsInputSvideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-input-svideo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsInputSvideoElement.is, IconRoundSettingsInputSvideoElement);

export default IconRoundSettingsInputSvideoElement;
