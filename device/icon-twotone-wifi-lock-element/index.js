import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWifiLockElement
 * @class IconTwotoneWifiLockElement
 * @extends {AoflElement}
 */
class IconTwotoneWifiLockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWifiLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wifi-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWifiLockElement.is, IconTwotoneWifiLockElement);

export default IconTwotoneWifiLockElement;
