import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalWifi3BarLockElement
 * @class IconTwotoneSignalWifi3BarLockElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalWifi3BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalWifi3BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-wifi-3-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalWifi3BarLockElement.is, IconTwotoneSignalWifi3BarLockElement);

export default IconTwotoneSignalWifi3BarLockElement;
