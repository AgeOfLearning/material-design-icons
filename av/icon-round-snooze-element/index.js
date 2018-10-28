import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSnoozeElement
 * @class IconRoundSnoozeElement
 * @extends {AoflElement}
 */
class IconRoundSnoozeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSnoozeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-snooze';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSnoozeElement.is, IconRoundSnoozeElement);

export default IconRoundSnoozeElement;
