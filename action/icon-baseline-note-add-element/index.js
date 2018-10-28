import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNoteAddElement
 * @class IconBaselineNoteAddElement
 * @extends {AoflElement}
 */
class IconBaselineNoteAddElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNoteAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-note-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNoteAddElement.is, IconBaselineNoteAddElement);

export default IconBaselineNoteAddElement;
