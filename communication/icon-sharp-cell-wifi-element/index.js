import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCellWifiElement
 * @class IconSharpCellWifiElement
 * @extends {AoflElement}
 */
class IconSharpCellWifiElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCellWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cell-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCellWifiElement.is, IconSharpCellWifiElement);

export default IconSharpCellWifiElement;
