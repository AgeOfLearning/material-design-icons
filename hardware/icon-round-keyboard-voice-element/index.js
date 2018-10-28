import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardVoiceElement
 * @class IconRoundKeyboardVoiceElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardVoiceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardVoiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard-voice';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardVoiceElement.is, IconRoundKeyboardVoiceElement);

export default IconRoundKeyboardVoiceElement;
