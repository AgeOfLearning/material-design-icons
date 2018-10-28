import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePermContactCalendarElement
 * @class IconBaselinePermContactCalendarElement
 * @extends {AoflElement}
 */
class IconBaselinePermContactCalendarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePermContactCalendarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-perm-contact-calendar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePermContactCalendarElement.is, IconBaselinePermContactCalendarElement);

export default IconBaselinePermContactCalendarElement;
