import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAlarmOnElement
 * @class IconOutlineAlarmOnElement
 * @extends {AoflElement}
 */
class IconOutlineAlarmOnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAlarmOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-alarm-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAlarmOnElement.is, IconOutlineAlarmOnElement);

export default IconOutlineAlarmOnElement;
