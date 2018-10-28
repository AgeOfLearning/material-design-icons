import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhonePausedElement
 * @class IconRoundPhonePausedElement
 * @extends {AoflElement}
 */
class IconRoundPhonePausedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhonePausedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phone-paused';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhonePausedElement.is, IconRoundPhonePausedElement);

export default IconRoundPhonePausedElement;
