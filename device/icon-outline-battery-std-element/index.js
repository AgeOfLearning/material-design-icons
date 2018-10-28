import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBatteryStdElement
 * @class IconOutlineBatteryStdElement
 * @extends {AoflElement}
 */
class IconOutlineBatteryStdElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBatteryStdElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-std';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBatteryStdElement.is, IconOutlineBatteryStdElement);

export default IconOutlineBatteryStdElement;
