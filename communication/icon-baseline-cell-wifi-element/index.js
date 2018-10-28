import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCellWifiElement
 * @class IconBaselineCellWifiElement
 * @extends {AoflElement}
 */
class IconBaselineCellWifiElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCellWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cell-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCellWifiElement.is, IconBaselineCellWifiElement);

export default IconBaselineCellWifiElement;
