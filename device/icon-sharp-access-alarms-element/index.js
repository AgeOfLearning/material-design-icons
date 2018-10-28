import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccessAlarmsElement
 * @class IconSharpAccessAlarmsElement
 * @extends {AoflElement}
 */
class IconSharpAccessAlarmsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccessAlarmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-access-alarms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccessAlarmsElement.is, IconSharpAccessAlarmsElement);

export default IconSharpAccessAlarmsElement;
