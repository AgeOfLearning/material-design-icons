import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalWifiOffElement
 * @class IconBaselineSignalWifiOffElement
 * @extends {AoflElement}
 */
class IconBaselineSignalWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalWifiOffElement.is, IconBaselineSignalWifiOffElement);

export default IconBaselineSignalWifiOffElement;
