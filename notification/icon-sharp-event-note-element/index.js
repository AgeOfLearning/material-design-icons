import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEventNoteElement
 * @class IconSharpEventNoteElement
 * @extends {AoflElement}
 */
class IconSharpEventNoteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEventNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-event-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEventNoteElement.is, IconSharpEventNoteElement);

export default IconSharpEventNoteElement;
