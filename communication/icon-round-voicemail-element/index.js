import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVoicemailElement
 * @class IconRoundVoicemailElement
 * @extends {AoflElement}
 */
class IconRoundVoicemailElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVoicemailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-voicemail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVoicemailElement.is, IconRoundVoicemailElement);

export default IconRoundVoicemailElement;
