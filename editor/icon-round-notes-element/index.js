import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNotesElement
 * @class IconRoundNotesElement
 * @extends {AoflElement}
 */
class IconRoundNotesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNotesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-notes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNotesElement.is, IconRoundNotesElement);

export default IconRoundNotesElement;
