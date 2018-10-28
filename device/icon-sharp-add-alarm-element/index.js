import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddAlarmElement
 * @class IconSharpAddAlarmElement
 * @extends {AoflElement}
 */
class IconSharpAddAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddAlarmElement.is, IconSharpAddAlarmElement);

export default IconSharpAddAlarmElement;
