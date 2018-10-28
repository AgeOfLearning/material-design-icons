import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalWifi4BarLockElement
 * @class IconOutlineSignalWifi4BarLockElement
 * @extends {AoflElement}
 */
class IconOutlineSignalWifi4BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalWifi4BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-wifi-4-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalWifi4BarLockElement.is, IconOutlineSignalWifi4BarLockElement);

export default IconOutlineSignalWifi4BarLockElement;
