import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSettingsRemoteElement
 * @class IconBaselineSettingsRemoteElement
 * @extends {AoflElement}
 */
class IconBaselineSettingsRemoteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSettingsRemoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-settings-remote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSettingsRemoteElement.is, IconBaselineSettingsRemoteElement);

export default IconBaselineSettingsRemoteElement;
