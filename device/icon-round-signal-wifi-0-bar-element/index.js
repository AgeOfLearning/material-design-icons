import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalWifi0BarElement
 * @class IconRoundSignalWifi0BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalWifi0BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalWifi0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-wifi-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalWifi0BarElement.is, IconRoundSignalWifi0BarElement);

export default IconRoundSignalWifi0BarElement;
