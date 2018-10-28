import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAlarmAddElement
 * @class IconOutlineAlarmAddElement
 * @extends {AoflElement}
 */
class IconOutlineAlarmAddElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAlarmAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-alarm-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAlarmAddElement.is, IconOutlineAlarmAddElement);

export default IconOutlineAlarmAddElement;
