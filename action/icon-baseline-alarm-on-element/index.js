import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAlarmOnElement
 * @class IconBaselineAlarmOnElement
 * @extends {AoflElement}
 */
class IconBaselineAlarmOnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAlarmOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-alarm-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAlarmOnElement.is, IconBaselineAlarmOnElement);

export default IconBaselineAlarmOnElement;
