import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCalendarTodayElement
 * @class IconTwotoneCalendarTodayElement
 * @extends {AoflElement}
 */
class IconTwotoneCalendarTodayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCalendarTodayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-calendar-today';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCalendarTodayElement.is, IconTwotoneCalendarTodayElement);

export default IconTwotoneCalendarTodayElement;
