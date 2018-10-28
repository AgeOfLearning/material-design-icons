import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccessAlarmElement
 * @class IconBaselineAccessAlarmElement
 * @extends {AoflElement}
 */
class IconBaselineAccessAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccessAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-access-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccessAlarmElement.is, IconBaselineAccessAlarmElement);

export default IconBaselineAccessAlarmElement;
