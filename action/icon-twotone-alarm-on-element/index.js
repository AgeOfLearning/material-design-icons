import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAlarmOnElement
 * @class IconTwotoneAlarmOnElement
 * @extends {AoflElement}
 */
class IconTwotoneAlarmOnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAlarmOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-alarm-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAlarmOnElement.is, IconTwotoneAlarmOnElement);

export default IconTwotoneAlarmOnElement;
