import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineScheduleElement
 * @class IconBaselineScheduleElement
 * @extends {AoflElement}
 */
class IconBaselineScheduleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineScheduleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-schedule';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineScheduleElement.is, IconBaselineScheduleElement);

export default IconBaselineScheduleElement;
