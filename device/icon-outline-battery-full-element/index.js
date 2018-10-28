import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryFullElement
 * @class IconOutlineBatteryFullElement
 * @extends {AoflElement}
 */
class IconOutlineBatteryFullElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryFullElement.is, IconOutlineBatteryFullElement);

export default IconOutlineBatteryFullElement;
