import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddAlarmElement
 * @class IconTwotoneAddAlarmElement
 * @extends {AoflElement}
 */
class IconTwotoneAddAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddAlarmElement.is, IconTwotoneAddAlarmElement);

export default IconTwotoneAddAlarmElement;
