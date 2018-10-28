import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalWifiOffElement
 * @class IconOutlineSignalWifiOffElement
 * @extends {AoflElement}
 */
class IconOutlineSignalWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalWifiOffElement.is, IconOutlineSignalWifiOffElement);

export default IconOutlineSignalWifiOffElement;
