import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEventNoteElement
 * @class IconBaselineEventNoteElement
 * @extends {AoflElement}
 */
class IconBaselineEventNoteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEventNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-event-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEventNoteElement.is, IconBaselineEventNoteElement);

export default IconBaselineEventNoteElement;
