import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNoteElement
 * @class IconRoundNoteElement
 * @extends {AoflElement}
 */
class IconRoundNoteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNoteElement.is, IconRoundNoteElement);

export default IconRoundNoteElement;
