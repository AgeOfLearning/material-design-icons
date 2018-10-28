import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatItalicElement
 * @class IconOutlineFormatItalicElement
 * @extends {AoflElement}
 */
class IconOutlineFormatItalicElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatItalicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-italic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatItalicElement.is, IconOutlineFormatItalicElement);

export default IconOutlineFormatItalicElement;
