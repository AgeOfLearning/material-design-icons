import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccessAlarmsElement
 * @class IconTwotoneAccessAlarmsElement
 * @extends {AoflElement}
 */
class IconTwotoneAccessAlarmsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccessAlarmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-access-alarms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccessAlarmsElement.is, IconTwotoneAccessAlarmsElement);

export default IconTwotoneAccessAlarmsElement;
