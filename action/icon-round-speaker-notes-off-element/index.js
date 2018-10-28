import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSpeakerNotesOffElement
 * @class IconRoundSpeakerNotesOffElement
 * @extends {AoflElement}
 */
class IconRoundSpeakerNotesOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSpeakerNotesOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-speaker-notes-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSpeakerNotesOffElement.is, IconRoundSpeakerNotesOffElement);

export default IconRoundSpeakerNotesOffElement;
