import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccessAlarmElement
 * @class IconRoundAccessAlarmElement
 * @extends {AoflElement}
 */
class IconRoundAccessAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccessAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-access-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccessAlarmElement.is, IconRoundAccessAlarmElement);

export default IconRoundAccessAlarmElement;
