import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAlarmOffElement
 * @class IconRoundAlarmOffElement
 * @extends {AoflElement}
 */
class IconRoundAlarmOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAlarmOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-alarm-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAlarmOffElement.is, IconRoundAlarmOffElement);

export default IconRoundAlarmOffElement;
