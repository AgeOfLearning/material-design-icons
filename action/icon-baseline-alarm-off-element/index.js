import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAlarmOffElement
 * @class IconBaselineAlarmOffElement
 * @extends {AoflElement}
 */
class IconBaselineAlarmOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAlarmOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-alarm-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAlarmOffElement.is, IconBaselineAlarmOffElement);

export default IconBaselineAlarmOffElement;
