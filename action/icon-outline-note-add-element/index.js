import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNoteAddElement
 * @class IconOutlineNoteAddElement
 * @extends {AoflElement}
 */
class IconOutlineNoteAddElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNoteAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-note-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNoteAddElement.is, IconOutlineNoteAddElement);

export default IconOutlineNoteAddElement;
