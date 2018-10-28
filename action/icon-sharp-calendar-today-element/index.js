import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCalendarTodayElement
 * @class IconSharpCalendarTodayElement
 * @extends {AoflElement}
 */
class IconSharpCalendarTodayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCalendarTodayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-calendar-today';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCalendarTodayElement.is, IconSharpCalendarTodayElement);

export default IconSharpCalendarTodayElement;
