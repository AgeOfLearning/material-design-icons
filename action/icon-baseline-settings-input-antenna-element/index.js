import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsInputAntennaElement
 * @class IconBaselineSettingsInputAntennaElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsInputAntennaElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsInputAntennaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-input-antenna';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsInputAntennaElement.is, IconBaselineSettingsInputAntennaElement);

export default IconBaselineSettingsInputAntennaElement;
