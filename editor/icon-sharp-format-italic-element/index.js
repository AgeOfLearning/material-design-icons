import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatItalicElement
 * @class IconSharpFormatItalicElement
 * @extends {AoflElement}
 */
class IconSharpFormatItalicElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatItalicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-italic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatItalicElement.is, IconSharpFormatItalicElement);

export default IconSharpFormatItalicElement;
