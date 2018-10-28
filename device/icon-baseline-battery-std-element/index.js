import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryStdElement
 * @class IconBaselineBatteryStdElement
 * @extends {AoflElement}
 */
class IconBaselineBatteryStdElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryStdElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-std';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryStdElement.is, IconBaselineBatteryStdElement);

export default IconBaselineBatteryStdElement;
