import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCalendarViewDayElement
 * @class IconSharpCalendarViewDayElement
 * @extends {AoflElement}
 */
class IconSharpCalendarViewDayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCalendarViewDayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-calendar-view-day';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCalendarViewDayElement.is, IconSharpCalendarViewDayElement);

export default IconSharpCalendarViewDayElement;
