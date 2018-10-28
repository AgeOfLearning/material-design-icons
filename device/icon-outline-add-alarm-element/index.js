import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddAlarmElement
 * @class IconOutlineAddAlarmElement
 * @extends {AoflElement}
 */
class IconOutlineAddAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddAlarmElement.is, IconOutlineAddAlarmElement);

export default IconOutlineAddAlarmElement;
