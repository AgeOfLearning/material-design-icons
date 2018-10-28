import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNoteElement
 * @class IconSharpNoteElement
 * @extends {AoflElement}
 */
class IconSharpNoteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNoteElement.is, IconSharpNoteElement);

export default IconSharpNoteElement;
