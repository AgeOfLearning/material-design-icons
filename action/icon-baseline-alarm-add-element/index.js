import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAlarmAddElement
 * @class IconBaselineAlarmAddElement
 * @extends {AoflElement}
 */
class IconBaselineAlarmAddElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAlarmAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-alarm-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAlarmAddElement.is, IconBaselineAlarmAddElement);

export default IconBaselineAlarmAddElement;
