import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalWifi2BarLockElement
 * @class IconOutlineSignalWifi2BarLockElement
 * @extends {AoflElement}
 */
class IconOutlineSignalWifi2BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalWifi2BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-wifi-2-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalWifi2BarLockElement.is, IconOutlineSignalWifi2BarLockElement);

export default IconOutlineSignalWifi2BarLockElement;
