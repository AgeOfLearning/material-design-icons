import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBluetoothElement
 * @class IconBaselineBluetoothElement
 * @extends {AoflElement}
 */
class IconBaselineBluetoothElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBluetoothElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bluetooth';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBluetoothElement.is, IconBaselineBluetoothElement);

export default IconBaselineBluetoothElement;
