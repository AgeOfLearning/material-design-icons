import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatLineSpacingElement
 * @class IconSharpFormatLineSpacingElement
 * @extends {AoflElement}
 */
class IconSharpFormatLineSpacingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatLineSpacingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-line-spacing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatLineSpacingElement.is, IconSharpFormatLineSpacingElement);

export default IconSharpFormatLineSpacingElement;
