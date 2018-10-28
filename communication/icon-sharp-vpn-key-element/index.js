import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVpnKeyElement
 * @class IconSharpVpnKeyElement
 * @extends {AoflElement}
 */
class IconSharpVpnKeyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVpnKeyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-vpn-key';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVpnKeyElement.is, IconSharpVpnKeyElement);

export default IconSharpVpnKeyElement;
