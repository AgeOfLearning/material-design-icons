import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSettingsRemoteElement
 * @class IconOutlineSettingsRemoteElement
 * @extends {AoflElement}
 */
class IconOutlineSettingsRemoteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSettingsRemoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-settings-remote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSettingsRemoteElement.is, IconOutlineSettingsRemoteElement);

export default IconOutlineSettingsRemoteElement;
