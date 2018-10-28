import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTimerElement
 * @class IconRoundTimerElement
 * @extends {AoflElement}
 */
class IconRoundTimerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTimerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-timer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTimerElement.is, IconRoundTimerElement);

export default IconRoundTimerElement;
