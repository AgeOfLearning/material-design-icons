import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNoteAddElement
 * @class IconSharpNoteAddElement
 * @extends {AoflElement}
 */
class IconSharpNoteAddElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNoteAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-note-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNoteAddElement.is, IconSharpNoteAddElement);

export default IconSharpNoteAddElement;
