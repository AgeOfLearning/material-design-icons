import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBluetoothAudioElement
 * @class IconBaselineBluetoothAudioElement
 * @extends {AoflElement}
 */
class IconBaselineBluetoothAudioElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBluetoothAudioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bluetooth-audio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBluetoothAudioElement.is, IconBaselineBluetoothAudioElement);

export default IconBaselineBluetoothAudioElement;
