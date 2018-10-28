import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddAlarmElement
 * @class IconRoundAddAlarmElement
 * @extends {AoflElement}
 */
class IconRoundAddAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddAlarmElement.is, IconRoundAddAlarmElement);

export default IconRoundAddAlarmElement;
