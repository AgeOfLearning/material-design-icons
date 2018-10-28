import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVoiceOverOffElement
 * @class IconOutlineVoiceOverOffElement
 * @extends {AoflElement}
 */
class IconOutlineVoiceOverOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVoiceOverOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-voice-over-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVoiceOverOffElement.is, IconOutlineVoiceOverOffElement);

export default IconOutlineVoiceOverOffElement;
