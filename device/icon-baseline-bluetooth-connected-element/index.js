import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBluetoothConnectedElement
 * @class IconBaselineBluetoothConnectedElement
 * @extends {AoflElement}
 */
class IconBaselineBluetoothConnectedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBluetoothConnectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bluetooth-connected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBluetoothConnectedElement.is, IconBaselineBluetoothConnectedElement);

export default IconBaselineBluetoothConnectedElement;
