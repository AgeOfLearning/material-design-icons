import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBatteryFullElement
 * @class IconSharpBatteryFullElement
 * @extends {AoflElement}
 */
class IconSharpBatteryFullElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBatteryFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBatteryFullElement.is, IconSharpBatteryFullElement);

export default IconSharpBatteryFullElement;
