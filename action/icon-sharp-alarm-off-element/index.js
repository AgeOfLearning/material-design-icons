import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAlarmOffElement
 * @class IconSharpAlarmOffElement
 * @extends {AoflElement}
 */
class IconSharpAlarmOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAlarmOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-alarm-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAlarmOffElement.is, IconSharpAlarmOffElement);

export default IconSharpAlarmOffElement;
