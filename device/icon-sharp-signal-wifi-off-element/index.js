import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalWifiOffElement
 * @class IconSharpSignalWifiOffElement
 * @extends {AoflElement}
 */
class IconSharpSignalWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalWifiOffElement.is, IconSharpSignalWifiOffElement);

export default IconSharpSignalWifiOffElement;
