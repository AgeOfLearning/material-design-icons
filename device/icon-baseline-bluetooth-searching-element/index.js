import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBluetoothSearchingElement
 * @class IconBaselineBluetoothSearchingElement
 * @extends {AoflElement}
 */
class IconBaselineBluetoothSearchingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBluetoothSearchingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bluetooth-searching';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBluetoothSearchingElement.is, IconBaselineBluetoothSearchingElement);

export default IconBaselineBluetoothSearchingElement;
