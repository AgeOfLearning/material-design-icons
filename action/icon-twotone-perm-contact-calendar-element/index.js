import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePermContactCalendarElement
 * @class IconTwotonePermContactCalendarElement
 * @extends {AoflElement}
 */
class IconTwotonePermContactCalendarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePermContactCalendarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-perm-contact-calendar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePermContactCalendarElement.is, IconTwotonePermContactCalendarElement);

export default IconTwotonePermContactCalendarElement;
