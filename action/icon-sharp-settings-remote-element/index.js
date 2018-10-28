import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsRemoteElement
 * @class IconSharpSettingsRemoteElement
 * @extends {AoflElement}
 */
class IconSharpSettingsRemoteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsRemoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-remote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsRemoteElement.is, IconSharpSettingsRemoteElement);

export default IconSharpSettingsRemoteElement;
