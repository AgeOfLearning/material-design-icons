import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellularConnectedNoInternet4BarElement
 * @class IconOutlineSignalCellularConnectedNoInternet4BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellularConnectedNoInternet4BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellularConnectedNoInternet4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-connected-no-internet-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellularConnectedNoInternet4BarElement.is, IconOutlineSignalCellularConnectedNoInternet4BarElement);

export default IconOutlineSignalCellularConnectedNoInternet4BarElement;
