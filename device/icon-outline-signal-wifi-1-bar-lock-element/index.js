import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalWifi1BarLockElement
 * @class IconOutlineSignalWifi1BarLockElement
 * @extends {AoflElement}
 */
class IconOutlineSignalWifi1BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalWifi1BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-wifi-1-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalWifi1BarLockElement.is, IconOutlineSignalWifi1BarLockElement);

export default IconOutlineSignalWifi1BarLockElement;
