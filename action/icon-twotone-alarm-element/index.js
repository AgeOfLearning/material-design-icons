import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAlarmElement
 * @class IconTwotoneAlarmElement
 * @extends {AoflElement}
 */
class IconTwotoneAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAlarmElement.is, IconTwotoneAlarmElement);

export default IconTwotoneAlarmElement;
