import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBatteryFullElement
 * @class IconRoundBatteryFullElement
 * @extends {AoflElement}
 */
class IconRoundBatteryFullElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBatteryFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-battery-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBatteryFullElement.is, IconRoundBatteryFullElement);

export default IconRoundBatteryFullElement;
