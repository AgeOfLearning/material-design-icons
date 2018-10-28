import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNoteElement
 * @class IconTwotoneNoteElement
 * @extends {AoflElement}
 */
class IconTwotoneNoteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNoteElement.is, IconTwotoneNoteElement);

export default IconTwotoneNoteElement;
