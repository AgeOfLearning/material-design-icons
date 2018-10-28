import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellularConnectedNoInternet0BarElement
 * @class IconBaselineSignalCellularConnectedNoInternet0BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellularConnectedNoInternet0BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellularConnectedNoInternet0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-connected-no-internet-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellularConnectedNoInternet0BarElement.is, IconBaselineSignalCellularConnectedNoInternet0BarElement);

export default IconBaselineSignalCellularConnectedNoInternet0BarElement;
