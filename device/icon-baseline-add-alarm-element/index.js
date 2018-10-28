import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddAlarmElement
 * @class IconBaselineAddAlarmElement
 * @extends {AoflElement}
 */
class IconBaselineAddAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddAlarmElement.is, IconBaselineAddAlarmElement);

export default IconBaselineAddAlarmElement;
