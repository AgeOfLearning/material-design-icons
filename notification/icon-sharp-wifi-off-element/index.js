import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWifiOffElement
 * @class IconSharpWifiOffElement
 * @extends {AoflElement}
 */
class IconSharpWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWifiOffElement.is, IconSharpWifiOffElement);

export default IconSharpWifiOffElement;
