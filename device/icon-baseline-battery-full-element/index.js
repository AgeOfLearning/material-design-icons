import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBatteryFullElement
 * @class IconBaselineBatteryFullElement
 * @extends {AoflElement}
 */
class IconBaselineBatteryFullElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBatteryFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-battery-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBatteryFullElement.is, IconBaselineBatteryFullElement);

export default IconBaselineBatteryFullElement;
