import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVibrationElement
 * @class IconSharpVibrationElement
 * @extends {AoflElement}
 */
class IconSharpVibrationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVibrationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-vibration';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVibrationElement.is, IconSharpVibrationElement);

export default IconSharpVibrationElement;
