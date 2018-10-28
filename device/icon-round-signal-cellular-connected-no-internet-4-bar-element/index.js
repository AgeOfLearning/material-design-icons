import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellularConnectedNoInternet4BarElement
 * @class IconRoundSignalCellularConnectedNoInternet4BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellularConnectedNoInternet4BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellularConnectedNoInternet4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-connected-no-internet-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellularConnectedNoInternet4BarElement.is, IconRoundSignalCellularConnectedNoInternet4BarElement);

export default IconRoundSignalCellularConnectedNoInternet4BarElement;
