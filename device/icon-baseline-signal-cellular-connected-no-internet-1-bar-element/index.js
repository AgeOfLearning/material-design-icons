import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellularConnectedNoInternet1BarElement
 * @class IconBaselineSignalCellularConnectedNoInternet1BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellularConnectedNoInternet1BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellularConnectedNoInternet1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-connected-no-internet-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellularConnectedNoInternet1BarElement.is, IconBaselineSignalCellularConnectedNoInternet1BarElement);

export default IconBaselineSignalCellularConnectedNoInternet1BarElement;
