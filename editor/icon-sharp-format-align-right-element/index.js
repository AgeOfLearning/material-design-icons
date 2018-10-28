import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatAlignRightElement
 * @class IconSharpFormatAlignRightElement
 * @extends {AoflElement}
 */
class IconSharpFormatAlignRightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatAlignRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-align-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatAlignRightElement.is, IconSharpFormatAlignRightElement);

export default IconSharpFormatAlignRightElement;
