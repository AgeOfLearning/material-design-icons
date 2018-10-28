import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSpeakerNotesElement
 * @class IconTwotoneSpeakerNotesElement
 * @extends {AoflElement}
 */
class IconTwotoneSpeakerNotesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSpeakerNotesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-speaker-notes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSpeakerNotesElement.is, IconTwotoneSpeakerNotesElement);

export default IconTwotoneSpeakerNotesElement;
