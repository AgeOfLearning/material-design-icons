import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSpeakerNotesElement
 * @class IconRoundSpeakerNotesElement
 * @extends {AoflElement}
 */
class IconRoundSpeakerNotesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSpeakerNotesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-speaker-notes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSpeakerNotesElement.is, IconRoundSpeakerNotesElement);

export default IconRoundSpeakerNotesElement;
