import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellularConnectedNoInternet3BarElement
 * @class IconOutlineSignalCellularConnectedNoInternet3BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellularConnectedNoInternet3BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellularConnectedNoInternet3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-connected-no-internet-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellularConnectedNoInternet3BarElement.is, IconOutlineSignalCellularConnectedNoInternet3BarElement);

export default IconOutlineSignalCellularConnectedNoInternet3BarElement;
