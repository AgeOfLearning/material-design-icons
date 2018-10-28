import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardVoiceElement
 * @class IconBaselineKeyboardVoiceElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardVoiceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardVoiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard-voice';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardVoiceElement.is, IconBaselineKeyboardVoiceElement);

export default IconBaselineKeyboardVoiceElement;
