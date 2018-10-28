import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWifiTetheringElement
 * @class IconSharpWifiTetheringElement
 * @extends {AoflElement}
 */
class IconSharpWifiTetheringElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWifiTetheringElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wifi-tethering';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWifiTetheringElement.is, IconSharpWifiTetheringElement);

export default IconSharpWifiTetheringElement;
