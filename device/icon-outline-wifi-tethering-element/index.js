import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWifiTetheringElement
 * @class IconOutlineWifiTetheringElement
 * @extends {AoflElement}
 */
class IconOutlineWifiTetheringElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWifiTetheringElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wifi-tethering';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWifiTetheringElement.is, IconOutlineWifiTetheringElement);

export default IconOutlineWifiTetheringElement;
