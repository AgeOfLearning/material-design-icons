import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVoiceOverOffElement
 * @class IconSharpVoiceOverOffElement
 * @extends {AoflElement}
 */
class IconSharpVoiceOverOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVoiceOverOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-voice-over-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVoiceOverOffElement.is, IconSharpVoiceOverOffElement);

export default IconSharpVoiceOverOffElement;
