import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSignalCellularConnectedNoInternet2BarElement
 * @class IconRoundSignalCellularConnectedNoInternet2BarElement
 * @extends {AoflElement}
 */
class IconRoundSignalCellularConnectedNoInternet2BarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSignalCellularConnectedNoInternet2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-signal-cellular-connected-no-internet-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSignalCellularConnectedNoInternet2BarElement.is, IconRoundSignalCellularConnectedNoInternet2BarElement);

export default IconRoundSignalCellularConnectedNoInternet2BarElement;
