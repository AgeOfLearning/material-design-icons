import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNotesElement
 * @class IconSharpNotesElement
 * @extends {AoflElement}
 */
class IconSharpNotesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNotesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-notes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNotesElement.is, IconSharpNotesElement);

export default IconSharpNotesElement;
