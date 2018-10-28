import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellularConnectedNoInternet0BarElement
 * @class IconRoundSignalCellularConnectedNoInternet0BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellularConnectedNoInternet0BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellularConnectedNoInternet0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-connected-no-internet-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellularConnectedNoInternet0BarElement.is, IconRoundSignalCellularConnectedNoInternet0BarElement);

export default IconRoundSignalCellularConnectedNoInternet0BarElement;
