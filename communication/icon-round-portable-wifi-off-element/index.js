import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPortableWifiOffElement
 * @class IconRoundPortableWifiOffElement
 * @extends {AoflElement}
 */
class IconRoundPortableWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPortableWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-portable-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPortableWifiOffElement.is, IconRoundPortableWifiOffElement);

export default IconRoundPortableWifiOffElement;
