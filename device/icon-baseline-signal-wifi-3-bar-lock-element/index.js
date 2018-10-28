import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalWifi3BarLockElement
 * @class IconBaselineSignalWifi3BarLockElement
 * @extends {AoflElement}
 */
class IconBaselineSignalWifi3BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalWifi3BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-wifi-3-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalWifi3BarLockElement.is, IconBaselineSignalWifi3BarLockElement);

export default IconBaselineSignalWifi3BarLockElement;
