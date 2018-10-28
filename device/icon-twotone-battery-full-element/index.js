import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryFullElement
 * @class IconTwotoneBatteryFullElement
 * @extends {AoflElement}
 */
class IconTwotoneBatteryFullElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryFullElement.is, IconTwotoneBatteryFullElement);

export default IconTwotoneBatteryFullElement;
