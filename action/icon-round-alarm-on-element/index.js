import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAlarmOnElement
 * @class IconRoundAlarmOnElement
 * @extends {AoflElement}
 */
class IconRoundAlarmOnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAlarmOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-alarm-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAlarmOnElement.is, IconRoundAlarmOnElement);

export default IconRoundAlarmOnElement;
