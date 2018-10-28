import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBatteryStdElement
 * @class IconTwotoneBatteryStdElement
 * @extends {AoflElement}
 */
class IconTwotoneBatteryStdElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBatteryStdElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-std';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBatteryStdElement.is, IconTwotoneBatteryStdElement);

export default IconTwotoneBatteryStdElement;
