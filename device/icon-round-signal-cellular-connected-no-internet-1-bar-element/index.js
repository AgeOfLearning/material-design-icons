import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellularConnectedNoInternet1BarElement
 * @class IconRoundSignalCellularConnectedNoInternet1BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellularConnectedNoInternet1BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellularConnectedNoInternet1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-connected-no-internet-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellularConnectedNoInternet1BarElement.is, IconRoundSignalCellularConnectedNoInternet1BarElement);

export default IconRoundSignalCellularConnectedNoInternet1BarElement;
