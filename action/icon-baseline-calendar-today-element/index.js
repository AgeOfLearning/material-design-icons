import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCalendarTodayElement
 * @class IconBaselineCalendarTodayElement
 * @extends {AoflElement}
 */
class IconBaselineCalendarTodayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCalendarTodayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-calendar-today';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCalendarTodayElement.is, IconBaselineCalendarTodayElement);

export default IconBaselineCalendarTodayElement;
