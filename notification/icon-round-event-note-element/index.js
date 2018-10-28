import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEventNoteElement
 * @class IconRoundEventNoteElement
 * @extends {AoflElement}
 */
class IconRoundEventNoteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEventNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-event-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEventNoteElement.is, IconRoundEventNoteElement);

export default IconRoundEventNoteElement;
