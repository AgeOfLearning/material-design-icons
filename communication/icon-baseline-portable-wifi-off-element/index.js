import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePortableWifiOffElement
 * @class IconBaselinePortableWifiOffElement
 * @extends {AoflElement}
 */
class IconBaselinePortableWifiOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePortableWifiOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-portable-wifi-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePortableWifiOffElement.is, IconBaselinePortableWifiOffElement);

export default IconBaselinePortableWifiOffElement;
