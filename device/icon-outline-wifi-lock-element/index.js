import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWifiLockElement
 * @class IconOutlineWifiLockElement
 * @extends {AoflElement}
 */
class IconOutlineWifiLockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWifiLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wifi-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWifiLockElement.is, IconOutlineWifiLockElement);

export default IconOutlineWifiLockElement;
