import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalWifi4BarLockElement
 * @class IconTwotoneSignalWifi4BarLockElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalWifi4BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalWifi4BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-wifi-4-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalWifi4BarLockElement.is, IconTwotoneSignalWifi4BarLockElement);

export default IconTwotoneSignalWifi4BarLockElement;
