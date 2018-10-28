import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardVoiceElement
 * @class IconOutlineKeyboardVoiceElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardVoiceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardVoiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard-voice';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardVoiceElement.is, IconOutlineKeyboardVoiceElement);

export default IconOutlineKeyboardVoiceElement;
