import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePermContactCalendarElement
 * @class IconOutlinePermContactCalendarElement
 * @extends {AoflElement}
 */
class IconOutlinePermContactCalendarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePermContactCalendarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-perm-contact-calendar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePermContactCalendarElement.is, IconOutlinePermContactCalendarElement);

export default IconOutlinePermContactCalendarElement;
