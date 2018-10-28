import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellularConnectedNoInternet2BarElement
 * @class IconBaselineSignalCellularConnectedNoInternet2BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellularConnectedNoInternet2BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellularConnectedNoInternet2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-connected-no-internet-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellularConnectedNoInternet2BarElement.is, IconBaselineSignalCellularConnectedNoInternet2BarElement);

export default IconBaselineSignalCellularConnectedNoInternet2BarElement;
