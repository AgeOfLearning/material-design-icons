import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalWifi2BarLockElement
 * @class IconBaselineSignalWifi2BarLockElement
 * @extends {AoflElement}
 */
class IconBaselineSignalWifi2BarLockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalWifi2BarLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-wifi-2-bar-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalWifi2BarLockElement.is, IconBaselineSignalWifi2BarLockElement);

export default IconBaselineSignalWifi2BarLockElement;
