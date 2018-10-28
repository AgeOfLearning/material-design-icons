import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSpeakerNotesOffElement
 * @class IconBaselineSpeakerNotesOffElement
 * @extends {AoflElement}
 */
class IconBaselineSpeakerNotesOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSpeakerNotesOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-speaker-notes-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSpeakerNotesOffElement.is, IconBaselineSpeakerNotesOffElement);

export default IconBaselineSpeakerNotesOffElement;
