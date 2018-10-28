import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCalendarTodayElement
 * @class IconRoundCalendarTodayElement
 * @extends {AoflElement}
 */
class IconRoundCalendarTodayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCalendarTodayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-calendar-today';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCalendarTodayElement.is, IconRoundCalendarTodayElement);

export default IconRoundCalendarTodayElement;
