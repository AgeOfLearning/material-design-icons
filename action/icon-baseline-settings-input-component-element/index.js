import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsInputComponentElement
 * @class IconBaselineSettingsInputComponentElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsInputComponentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsInputComponentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-input-component';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsInputComponentElement.is, IconBaselineSettingsInputComponentElement);

export default IconBaselineSettingsInputComponentElement;
