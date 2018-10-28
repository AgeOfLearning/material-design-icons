import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAvTimerElement
 * @class IconRoundAvTimerElement
 * @extends {AoflElement}
 */
class IconRoundAvTimerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAvTimerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-av-timer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAvTimerElement.is, IconRoundAvTimerElement);

export default IconRoundAvTimerElement;
