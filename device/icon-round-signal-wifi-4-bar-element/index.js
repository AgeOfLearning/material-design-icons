import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalWifi4BarElement
 * @class IconRoundSignalWifi4BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalWifi4BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalWifi4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-wifi-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalWifi4BarElement.is, IconRoundSignalWifi4BarElement);

export default IconRoundSignalWifi4BarElement;
