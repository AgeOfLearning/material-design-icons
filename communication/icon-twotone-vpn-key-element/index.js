import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVpnKeyElement
 * @class IconTwotoneVpnKeyElement
 * @extends {AoflElement}
 */
class IconTwotoneVpnKeyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVpnKeyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-vpn-key';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVpnKeyElement.is, IconTwotoneVpnKeyElement);

export default IconTwotoneVpnKeyElement;
