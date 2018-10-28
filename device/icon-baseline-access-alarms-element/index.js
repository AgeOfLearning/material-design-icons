import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccessAlarmsElement
 * @class IconBaselineAccessAlarmsElement
 * @extends {AoflElement}
 */
class IconBaselineAccessAlarmsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccessAlarmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-access-alarms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccessAlarmsElement.is, IconBaselineAccessAlarmsElement);

export default IconBaselineAccessAlarmsElement;
