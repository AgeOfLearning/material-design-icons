import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBluetoothSearchingElement
 * @class IconRoundBluetoothSearchingElement
 * @extends {AoflElement}
 */
class IconRoundBluetoothSearchingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBluetoothSearchingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bluetooth-searching';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBluetoothSearchingElement.is, IconRoundBluetoothSearchingElement);

export default IconRoundBluetoothSearchingElement;
