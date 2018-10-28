import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSpeakerNotesElement
 * @class IconBaselineSpeakerNotesElement
 * @extends {AoflElement}
 */
class IconBaselineSpeakerNotesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSpeakerNotesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-speaker-notes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSpeakerNotesElement.is, IconBaselineSpeakerNotesElement);

export default IconBaselineSpeakerNotesElement;
