import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNoteAddElement
 * @class IconRoundNoteAddElement
 * @extends {AoflElement}
 */
class IconRoundNoteAddElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNoteAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-note-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNoteAddElement.is, IconRoundNoteAddElement);

export default IconRoundNoteAddElement;
