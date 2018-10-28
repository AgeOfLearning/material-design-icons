import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTimerOffElement
 * @class IconRoundTimerOffElement
 * @extends {AoflElement}
 */
class IconRoundTimerOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTimerOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-timer-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTimerOffElement.is, IconRoundTimerOffElement);

export default IconRoundTimerOffElement;
