import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWifiOffElement
 * @class IconBaselineWifiOffElement
 * @extends {AoflElement}
 */
class IconBaselineWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWifiOffElement.is, IconBaselineWifiOffElement);

export default IconBaselineWifiOffElement;
