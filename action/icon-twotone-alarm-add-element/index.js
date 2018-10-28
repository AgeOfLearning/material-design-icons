import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAlarmAddElement
 * @class IconTwotoneAlarmAddElement
 * @extends {AoflElement}
 */
class IconTwotoneAlarmAddElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAlarmAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-alarm-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAlarmAddElement.is, IconTwotoneAlarmAddElement);

export default IconTwotoneAlarmAddElement;
