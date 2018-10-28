import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCalendarViewDayElement
 * @class IconOutlineCalendarViewDayElement
 * @extends {AoflElement}
 */
class IconOutlineCalendarViewDayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCalendarViewDayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-calendar-view-day';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCalendarViewDayElement.is, IconOutlineCalendarViewDayElement);

export default IconOutlineCalendarViewDayElement;
