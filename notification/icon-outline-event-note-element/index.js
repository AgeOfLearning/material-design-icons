import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEventNoteElement
 * @class IconOutlineEventNoteElement
 * @extends {AoflElement}
 */
class IconOutlineEventNoteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEventNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-event-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEventNoteElement.is, IconOutlineEventNoteElement);

export default IconOutlineEventNoteElement;
