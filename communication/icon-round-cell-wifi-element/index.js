import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCellWifiElement
 * @class IconRoundCellWifiElement
 * @extends {AoflElement}
 */
class IconRoundCellWifiElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCellWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cell-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCellWifiElement.is, IconRoundCellWifiElement);

export default IconRoundCellWifiElement;
