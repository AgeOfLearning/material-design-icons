import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellularConnectedNoInternet3BarElement
 * @class IconBaselineSignalCellularConnectedNoInternet3BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellularConnectedNoInternet3BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellularConnectedNoInternet3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-connected-no-internet-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellularConnectedNoInternet3BarElement.is, IconBaselineSignalCellularConnectedNoInternet3BarElement);

export default IconBaselineSignalCellularConnectedNoInternet3BarElement;
