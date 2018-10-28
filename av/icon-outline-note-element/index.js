import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNoteElement
 * @class IconOutlineNoteElement
 * @extends {AoflElement}
 */
class IconOutlineNoteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNoteElement.is, IconOutlineNoteElement);

export default IconOutlineNoteElement;
