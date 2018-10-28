import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBluetoothDisabledElement
 * @class IconBaselineBluetoothDisabledElement
 * @extends {AoflElement}
 */
class IconBaselineBluetoothDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBluetoothDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bluetooth-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBluetoothDisabledElement.is, IconBaselineBluetoothDisabledElement);

export default IconBaselineBluetoothDisabledElement;
