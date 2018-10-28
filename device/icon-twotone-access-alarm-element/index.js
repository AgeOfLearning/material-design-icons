import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccessAlarmElement
 * @class IconTwotoneAccessAlarmElement
 * @extends {AoflElement}
 */
class IconTwotoneAccessAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccessAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-access-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccessAlarmElement.is, IconTwotoneAccessAlarmElement);

export default IconTwotoneAccessAlarmElement;
