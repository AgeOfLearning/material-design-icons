import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAlarmElement
 * @class IconOutlineAlarmElement
 * @extends {AoflElement}
 */
class IconOutlineAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAlarmElement.is, IconOutlineAlarmElement);

export default IconOutlineAlarmElement;
