import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNotesElement
 * @class IconOutlineNotesElement
 * @extends {AoflElement}
 */
class IconOutlineNotesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNotesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-notes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNotesElement.is, IconOutlineNotesElement);

export default IconOutlineNotesElement;
