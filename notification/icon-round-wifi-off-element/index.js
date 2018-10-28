import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWifiOffElement
 * @class IconRoundWifiOffElement
 * @extends {AoflElement}
 */
class IconRoundWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWifiOffElement.is, IconRoundWifiOffElement);

export default IconRoundWifiOffElement;
