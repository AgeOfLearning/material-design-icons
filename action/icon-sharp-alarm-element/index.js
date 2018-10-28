import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAlarmElement
 * @class IconSharpAlarmElement
 * @extends {AoflElement}
 */
class IconSharpAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAlarmElement.is, IconSharpAlarmElement);

export default IconSharpAlarmElement;
