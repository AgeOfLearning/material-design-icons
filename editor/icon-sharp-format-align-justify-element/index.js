import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatAlignJustifyElement
 * @class IconSharpFormatAlignJustifyElement
 * @extends {AoflElement}
 */
class IconSharpFormatAlignJustifyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatAlignJustifyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-align-justify';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatAlignJustifyElement.is, IconSharpFormatAlignJustifyElement);

export default IconSharpFormatAlignJustifyElement;
