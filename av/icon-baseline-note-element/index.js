import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNoteElement
 * @class IconBaselineNoteElement
 * @extends {AoflElement}
 */
class IconBaselineNoteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNoteElement.is, IconBaselineNoteElement);

export default IconBaselineNoteElement;
