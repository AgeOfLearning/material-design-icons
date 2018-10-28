import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalWifi3BarElement
 * @class IconRoundSignalWifi3BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalWifi3BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalWifi3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-wifi-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalWifi3BarElement.is, IconRoundSignalWifi3BarElement);

export default IconRoundSignalWifi3BarElement;
