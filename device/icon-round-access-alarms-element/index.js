import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccessAlarmsElement
 * @class IconRoundAccessAlarmsElement
 * @extends {AoflElement}
 */
class IconRoundAccessAlarmsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccessAlarmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-access-alarms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccessAlarmsElement.is, IconRoundAccessAlarmsElement);

export default IconRoundAccessAlarmsElement;
