import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellularConnectedNoInternet1BarElement
 * @class IconOutlineSignalCellularConnectedNoInternet1BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellularConnectedNoInternet1BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellularConnectedNoInternet1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-connected-no-internet-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellularConnectedNoInternet1BarElement.is, IconOutlineSignalCellularConnectedNoInternet1BarElement);

export default IconOutlineSignalCellularConnectedNoInternet1BarElement;
