import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellularConnectedNoInternet4BarElement
 * @class IconSharpSignalCellularConnectedNoInternet4BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellularConnectedNoInternet4BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellularConnectedNoInternet4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-connected-no-internet-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellularConnectedNoInternet4BarElement.is, IconSharpSignalCellularConnectedNoInternet4BarElement);

export default IconSharpSignalCellularConnectedNoInternet4BarElement;
