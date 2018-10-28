import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPermContactCalendarElement
 * @class IconRoundPermContactCalendarElement
 * @extends {AoflElement}
 */
class IconRoundPermContactCalendarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPermContactCalendarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-perm-contact-calendar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPermContactCalendarElement.is, IconRoundPermContactCalendarElement);

export default IconRoundPermContactCalendarElement;
