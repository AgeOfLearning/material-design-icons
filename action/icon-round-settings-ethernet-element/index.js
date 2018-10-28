import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSettingsEthernetElement
 * @class IconRoundSettingsEthernetElement
 * @extends {AoflElement}
 */
class IconRoundSettingsEthernetElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSettingsEthernetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-settings-ethernet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSettingsEthernetElement.is, IconRoundSettingsEthernetElement);

export default IconRoundSettingsEthernetElement;
