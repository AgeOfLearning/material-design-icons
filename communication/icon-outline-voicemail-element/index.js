import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVoicemailElement
 * @class IconOutlineVoicemailElement
 * @extends {AoflElement}
 */
class IconOutlineVoicemailElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVoicemailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-voicemail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVoicemailElement.is, IconOutlineVoicemailElement);

export default IconOutlineVoicemailElement;
