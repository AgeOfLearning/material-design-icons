import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAlarmOffElement
 * @class IconOutlineAlarmOffElement
 * @extends {AoflElement}
 */
class IconOutlineAlarmOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAlarmOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-alarm-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAlarmOffElement.is, IconOutlineAlarmOffElement);

export default IconOutlineAlarmOffElement;
