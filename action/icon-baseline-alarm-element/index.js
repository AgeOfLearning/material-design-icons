import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAlarmElement
 * @class IconBaselineAlarmElement
 * @extends {AoflElement}
 */
class IconBaselineAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAlarmElement.is, IconBaselineAlarmElement);

export default IconBaselineAlarmElement;
