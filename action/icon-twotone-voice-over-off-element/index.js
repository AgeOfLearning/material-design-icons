import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVoiceOverOffElement
 * @class IconTwotoneVoiceOverOffElement
 * @extends {AoflElement}
 */
class IconTwotoneVoiceOverOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVoiceOverOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-voice-over-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVoiceOverOffElement.is, IconTwotoneVoiceOverOffElement);

export default IconTwotoneVoiceOverOffElement;
