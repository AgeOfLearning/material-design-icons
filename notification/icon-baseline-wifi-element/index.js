import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWifiElement
 * @class IconBaselineWifiElement
 * @extends {AoflElement}
 */
class IconBaselineWifiElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWifiElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wifi';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWifiElement.is, IconBaselineWifiElement);

export default IconBaselineWifiElement;
