import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAlarmAddElement
 * @class IconRoundAlarmAddElement
 * @extends {AoflElement}
 */
class IconRoundAlarmAddElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAlarmAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-alarm-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAlarmAddElement.is, IconRoundAlarmAddElement);

export default IconRoundAlarmAddElement;
