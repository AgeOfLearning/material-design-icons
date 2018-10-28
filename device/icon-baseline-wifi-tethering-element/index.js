import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWifiTetheringElement
 * @class IconBaselineWifiTetheringElement
 * @extends {AoflElement}
 */
class IconBaselineWifiTetheringElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWifiTetheringElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wifi-tethering';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWifiTetheringElement.is, IconBaselineWifiTetheringElement);

export default IconBaselineWifiTetheringElement;
