import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCellWifiElement
 * @class IconTwotoneCellWifiElement
 * @extends {AoflElement}
 */
class IconTwotoneCellWifiElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCellWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cell-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCellWifiElement.is, IconTwotoneCellWifiElement);

export default IconTwotoneCellWifiElement;
