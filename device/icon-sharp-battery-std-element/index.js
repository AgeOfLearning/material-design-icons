import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryStdElement
 * @class IconSharpBatteryStdElement
 * @extends {AoflElement}
 */
class IconSharpBatteryStdElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryStdElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-std';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryStdElement.is, IconSharpBatteryStdElement);

export default IconSharpBatteryStdElement;
