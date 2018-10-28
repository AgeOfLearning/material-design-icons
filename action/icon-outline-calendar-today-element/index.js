import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCalendarTodayElement
 * @class IconOutlineCalendarTodayElement
 * @extends {AoflElement}
 */
class IconOutlineCalendarTodayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCalendarTodayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-calendar-today';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCalendarTodayElement.is, IconOutlineCalendarTodayElement);

export default IconOutlineCalendarTodayElement;
