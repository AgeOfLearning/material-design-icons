import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSpeakerNotesOffElement
 * @class IconOutlineSpeakerNotesOffElement
 * @extends {AoflElement}
 */
class IconOutlineSpeakerNotesOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSpeakerNotesOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-speaker-notes-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSpeakerNotesOffElement.is, IconOutlineSpeakerNotesOffElement);

export default IconOutlineSpeakerNotesOffElement;
