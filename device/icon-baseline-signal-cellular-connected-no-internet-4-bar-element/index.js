import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellularConnectedNoInternet4BarElement
 * @class IconBaselineSignalCellularConnectedNoInternet4BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellularConnectedNoInternet4BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellularConnectedNoInternet4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-connected-no-internet-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellularConnectedNoInternet4BarElement.is, IconBaselineSignalCellularConnectedNoInternet4BarElement);

export default IconBaselineSignalCellularConnectedNoInternet4BarElement;
