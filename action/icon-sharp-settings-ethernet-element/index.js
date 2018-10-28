import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSettingsEthernetElement
 * @class IconSharpSettingsEthernetElement
 * @extends {AoflElement}
 */
class IconSharpSettingsEthernetElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSettingsEthernetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-settings-ethernet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSettingsEthernetElement.is, IconSharpSettingsEthernetElement);

export default IconSharpSettingsEthernetElement;
