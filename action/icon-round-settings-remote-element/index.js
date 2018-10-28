import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsRemoteElement
 * @class IconRoundSettingsRemoteElement
 * @extends {AoflElement}
 */
class IconRoundSettingsRemoteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsRemoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-remote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsRemoteElement.is, IconRoundSettingsRemoteElement);

export default IconRoundSettingsRemoteElement;
