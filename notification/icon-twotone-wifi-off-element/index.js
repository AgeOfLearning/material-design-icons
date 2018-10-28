import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWifiOffElement
 * @class IconTwotoneWifiOffElement
 * @extends {AoflElement}
 */
class IconTwotoneWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWifiOffElement.is, IconTwotoneWifiOffElement);

export default IconTwotoneWifiOffElement;
