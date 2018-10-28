import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVpnKeyElement
 * @class IconOutlineVpnKeyElement
 * @extends {AoflElement}
 */
class IconOutlineVpnKeyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVpnKeyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-vpn-key';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVpnKeyElement.is, IconOutlineVpnKeyElement);

export default IconOutlineVpnKeyElement;
