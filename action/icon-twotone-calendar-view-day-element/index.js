import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCalendarViewDayElement
 * @class IconTwotoneCalendarViewDayElement
 * @extends {AoflElement}
 */
class IconTwotoneCalendarViewDayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCalendarViewDayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-calendar-view-day';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCalendarViewDayElement.is, IconTwotoneCalendarViewDayElement);

export default IconTwotoneCalendarViewDayElement;
