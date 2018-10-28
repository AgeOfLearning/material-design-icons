import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsInputSvideoElement
 * @class IconBaselineSettingsInputSvideoElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsInputSvideoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsInputSvideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-input-svideo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsInputSvideoElement.is, IconBaselineSettingsInputSvideoElement);

export default IconBaselineSettingsInputSvideoElement;
