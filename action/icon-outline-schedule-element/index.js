import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineScheduleElement
 * @class IconOutlineScheduleElement
 * @extends {AoflElement}
 */
class IconOutlineScheduleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineScheduleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-schedule';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineScheduleElement.is, IconOutlineScheduleElement);

export default IconOutlineScheduleElement;
