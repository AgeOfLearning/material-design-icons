import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEventNoteElement
 * @class IconTwotoneEventNoteElement
 * @extends {AoflElement}
 */
class IconTwotoneEventNoteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEventNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-event-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEventNoteElement.is, IconTwotoneEventNoteElement);

export default IconTwotoneEventNoteElement;
