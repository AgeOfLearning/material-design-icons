import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVpnKeyElement
 * @class IconBaselineVpnKeyElement
 * @extends {AoflElement}
 */
class IconBaselineVpnKeyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVpnKeyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-vpn-key';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVpnKeyElement.is, IconBaselineVpnKeyElement);

export default IconBaselineVpnKeyElement;
