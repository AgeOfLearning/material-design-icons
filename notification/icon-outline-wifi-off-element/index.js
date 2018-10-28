import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWifiOffElement
 * @class IconOutlineWifiOffElement
 * @extends {AoflElement}
 */
class IconOutlineWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWifiOffElement.is, IconOutlineWifiOffElement);

export default IconOutlineWifiOffElement;
