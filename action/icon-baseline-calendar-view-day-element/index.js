import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCalendarViewDayElement
 * @class IconBaselineCalendarViewDayElement
 * @extends {AoflElement}
 */
class IconBaselineCalendarViewDayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCalendarViewDayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-calendar-view-day';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCalendarViewDayElement.is, IconBaselineCalendarViewDayElement);

export default IconBaselineCalendarViewDayElement;
