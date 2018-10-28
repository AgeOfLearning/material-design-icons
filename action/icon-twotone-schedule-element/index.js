import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneScheduleElement
 * @class IconTwotoneScheduleElement
 * @extends {AoflElement}
 */
class IconTwotoneScheduleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneScheduleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-schedule';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneScheduleElement.is, IconTwotoneScheduleElement);

export default IconTwotoneScheduleElement;
