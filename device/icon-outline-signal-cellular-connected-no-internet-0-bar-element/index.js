import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellularConnectedNoInternet0BarElement
 * @class IconOutlineSignalCellularConnectedNoInternet0BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellularConnectedNoInternet0BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellularConnectedNoInternet0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-connected-no-internet-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellularConnectedNoInternet0BarElement.is, IconOutlineSignalCellularConnectedNoInternet0BarElement);

export default IconOutlineSignalCellularConnectedNoInternet0BarElement;
