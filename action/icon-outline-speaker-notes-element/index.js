import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSpeakerNotesElement
 * @class IconOutlineSpeakerNotesElement
 * @extends {AoflElement}
 */
class IconOutlineSpeakerNotesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSpeakerNotesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-speaker-notes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSpeakerNotesElement.is, IconOutlineSpeakerNotesElement);

export default IconOutlineSpeakerNotesElement;
