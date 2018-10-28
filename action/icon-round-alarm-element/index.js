import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAlarmElement
 * @class IconRoundAlarmElement
 * @extends {AoflElement}
 */
class IconRoundAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAlarmElement.is, IconRoundAlarmElement);

export default IconRoundAlarmElement;
