import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccessAlarmsElement
 * @class IconOutlineAccessAlarmsElement
 * @extends {AoflElement}
 */
class IconOutlineAccessAlarmsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccessAlarmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-access-alarms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccessAlarmsElement.is, IconOutlineAccessAlarmsElement);

export default IconOutlineAccessAlarmsElement;
