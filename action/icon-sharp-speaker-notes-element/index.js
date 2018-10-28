import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSpeakerNotesElement
 * @class IconSharpSpeakerNotesElement
 * @extends {AoflElement}
 */
class IconSharpSpeakerNotesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSpeakerNotesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-speaker-notes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSpeakerNotesElement.is, IconSharpSpeakerNotesElement);

export default IconSharpSpeakerNotesElement;
