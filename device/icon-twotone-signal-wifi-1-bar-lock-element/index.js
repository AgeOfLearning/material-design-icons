import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalWifi1BarLockElement
 * @class IconTwotoneSignalWifi1BarLockElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalWifi1BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalWifi1BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-wifi-1-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalWifi1BarLockElement.is, IconTwotoneSignalWifi1BarLockElement);

export default IconTwotoneSignalWifi1BarLockElement;
