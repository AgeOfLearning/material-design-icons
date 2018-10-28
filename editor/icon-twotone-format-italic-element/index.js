import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatItalicElement
 * @class IconTwotoneFormatItalicElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatItalicElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatItalicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-italic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatItalicElement.is, IconTwotoneFormatItalicElement);

export default IconTwotoneFormatItalicElement;
