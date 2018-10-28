import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardVoiceElement
 * @class IconSharpKeyboardVoiceElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardVoiceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardVoiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard-voice';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardVoiceElement.is, IconSharpKeyboardVoiceElement);

export default IconSharpKeyboardVoiceElement;
