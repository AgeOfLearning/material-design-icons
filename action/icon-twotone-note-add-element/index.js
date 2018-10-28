import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNoteAddElement
 * @class IconTwotoneNoteAddElement
 * @extends {AoflElement}
 */
class IconTwotoneNoteAddElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNoteAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-note-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNoteAddElement.is, IconTwotoneNoteAddElement);

export default IconTwotoneNoteAddElement;
