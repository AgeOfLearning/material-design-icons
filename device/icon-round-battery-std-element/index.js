import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryStdElement
 * @class IconRoundBatteryStdElement
 * @extends {AoflElement}
 */
class IconRoundBatteryStdElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryStdElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-std';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryStdElement.is, IconRoundBatteryStdElement);

export default IconRoundBatteryStdElement;
