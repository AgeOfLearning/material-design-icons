import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVpnKeyElement
 * @class IconRoundVpnKeyElement
 * @extends {AoflElement}
 */
class IconRoundVpnKeyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVpnKeyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-vpn-key';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVpnKeyElement.is, IconRoundVpnKeyElement);

export default IconRoundVpnKeyElement;
