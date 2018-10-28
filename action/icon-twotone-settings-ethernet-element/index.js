import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSettingsEthernetElement
 * @class IconTwotoneSettingsEthernetElement
 * @extends {AoflElement}
 */
class IconTwotoneSettingsEthernetElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSettingsEthernetElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-settings-ethernet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSettingsEthernetElement.is, IconTwotoneSettingsEthernetElement);

export default IconTwotoneSettingsEthernetElement;
