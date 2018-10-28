import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePortableWifiOffElement
 * @class IconOutlinePortableWifiOffElement
 * @extends {AoflElement}
 */
class IconOutlinePortableWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePortableWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-portable-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePortableWifiOffElement.is, IconOutlinePortableWifiOffElement);

export default IconOutlinePortableWifiOffElement;
