import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalWifi3BarLockElement
 * @class IconOutlineSignalWifi3BarLockElement
 * @extends {AoflElement}
 */
class IconOutlineSignalWifi3BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalWifi3BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-wifi-3-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalWifi3BarLockElement.is, IconOutlineSignalWifi3BarLockElement);

export default IconOutlineSignalWifi3BarLockElement;
