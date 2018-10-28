import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWifiTetheringElement
 * @class IconTwotoneWifiTetheringElement
 * @extends {AoflElement}
 */
class IconTwotoneWifiTetheringElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWifiTetheringElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wifi-tethering';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWifiTetheringElement.is, IconTwotoneWifiTetheringElement);

export default IconTwotoneWifiTetheringElement;
