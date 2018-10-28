import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAlarmOffElement
 * @class IconTwotoneAlarmOffElement
 * @extends {AoflElement}
 */
class IconTwotoneAlarmOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAlarmOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-alarm-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAlarmOffElement.is, IconTwotoneAlarmOffElement);

export default IconTwotoneAlarmOffElement;
