import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccessAlarmElement
 * @class IconOutlineAccessAlarmElement
 * @extends {AoflElement}
 */
class IconOutlineAccessAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccessAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-access-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccessAlarmElement.is, IconOutlineAccessAlarmElement);

export default IconOutlineAccessAlarmElement;
