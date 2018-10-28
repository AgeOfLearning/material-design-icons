import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWifiTetheringElement
 * @class IconRoundWifiTetheringElement
 * @extends {AoflElement}
 */
class IconRoundWifiTetheringElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWifiTetheringElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wifi-tethering';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWifiTetheringElement.is, IconRoundWifiTetheringElement);

export default IconRoundWifiTetheringElement;
