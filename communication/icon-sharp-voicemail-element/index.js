import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVoicemailElement
 * @class IconSharpVoicemailElement
 * @extends {AoflElement}
 */
class IconSharpVoicemailElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVoicemailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-voicemail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVoicemailElement.is, IconSharpVoicemailElement);

export default IconSharpVoicemailElement;
