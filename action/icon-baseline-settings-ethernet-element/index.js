import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsEthernetElement
 * @class IconBaselineSettingsEthernetElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsEthernetElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsEthernetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-ethernet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsEthernetElement.is, IconBaselineSettingsEthernetElement);

export default IconBaselineSettingsEthernetElement;
