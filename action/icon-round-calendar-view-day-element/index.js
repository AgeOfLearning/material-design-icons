import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCalendarViewDayElement
 * @class IconRoundCalendarViewDayElement
 * @extends {AoflElement}
 */
class IconRoundCalendarViewDayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCalendarViewDayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-calendar-view-day';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCalendarViewDayElement.is, IconRoundCalendarViewDayElement);

export default IconRoundCalendarViewDayElement;
