import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPortableWifiOffElement
 * @class IconSharpPortableWifiOffElement
 * @extends {AoflElement}
 */
class IconSharpPortableWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPortableWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-portable-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPortableWifiOffElement.is, IconSharpPortableWifiOffElement);

export default IconSharpPortableWifiOffElement;
