import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellularConnectedNoInternet3BarElement
 * @class IconRoundSignalCellularConnectedNoInternet3BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellularConnectedNoInternet3BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellularConnectedNoInternet3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-connected-no-internet-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellularConnectedNoInternet3BarElement.is, IconRoundSignalCellularConnectedNoInternet3BarElement);

export default IconRoundSignalCellularConnectedNoInternet3BarElement;
