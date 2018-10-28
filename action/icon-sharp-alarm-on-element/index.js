import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAlarmOnElement
 * @class IconSharpAlarmOnElement
 * @extends {AoflElement}
 */
class IconSharpAlarmOnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAlarmOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-alarm-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAlarmOnElement.is, IconSharpAlarmOnElement);

export default IconSharpAlarmOnElement;
