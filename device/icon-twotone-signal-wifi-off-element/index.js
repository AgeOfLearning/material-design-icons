import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalWifiOffElement
 * @class IconTwotoneSignalWifiOffElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalWifiOffElement.is, IconTwotoneSignalWifiOffElement);

export default IconTwotoneSignalWifiOffElement;
