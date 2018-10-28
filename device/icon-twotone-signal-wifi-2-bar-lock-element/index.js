import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalWifi2BarLockElement
 * @class IconTwotoneSignalWifi2BarLockElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalWifi2BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalWifi2BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-wifi-2-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalWifi2BarLockElement.is, IconTwotoneSignalWifi2BarLockElement);

export default IconTwotoneSignalWifi2BarLockElement;
