import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalWifi4BarElement
 * @class IconBaselineSignalWifi4BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalWifi4BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalWifi4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-wifi-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalWifi4BarElement.is, IconBaselineSignalWifi4BarElement);

export default IconBaselineSignalWifi4BarElement;
