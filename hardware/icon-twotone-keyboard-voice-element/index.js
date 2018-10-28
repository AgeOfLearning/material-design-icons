import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardVoiceElement
 * @class IconTwotoneKeyboardVoiceElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardVoiceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardVoiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard-voice';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardVoiceElement.is, IconTwotoneKeyboardVoiceElement);

export default IconTwotoneKeyboardVoiceElement;
