import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSpeakerNotesOffElement
 * @class IconTwotoneSpeakerNotesOffElement
 * @extends {AoflElement}
 */
class IconTwotoneSpeakerNotesOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSpeakerNotesOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-speaker-notes-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSpeakerNotesOffElement.is, IconTwotoneSpeakerNotesOffElement);

export default IconTwotoneSpeakerNotesOffElement;
