import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSpeakerNotesOffElement
 * @class IconSharpSpeakerNotesOffElement
 * @extends {AoflElement}
 */
class IconSharpSpeakerNotesOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSpeakerNotesOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-speaker-notes-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSpeakerNotesOffElement.is, IconSharpSpeakerNotesOffElement);

export default IconSharpSpeakerNotesOffElement;
