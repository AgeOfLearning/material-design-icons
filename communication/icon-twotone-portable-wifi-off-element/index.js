import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePortableWifiOffElement
 * @class IconTwotonePortableWifiOffElement
 * @extends {AoflElement}
 */
class IconTwotonePortableWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePortableWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-portable-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePortableWifiOffElement.is, IconTwotonePortableWifiOffElement);

export default IconTwotonePortableWifiOffElement;
