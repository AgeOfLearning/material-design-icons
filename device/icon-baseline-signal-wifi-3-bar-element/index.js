import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalWifi3BarElement
 * @class IconBaselineSignalWifi3BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalWifi3BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalWifi3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-wifi-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalWifi3BarElement.is, IconBaselineSignalWifi3BarElement);

export default IconBaselineSignalWifi3BarElement;
