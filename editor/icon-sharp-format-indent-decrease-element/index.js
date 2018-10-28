import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatIndentDecreaseElement
 * @class IconSharpFormatIndentDecreaseElement
 * @extends {AoflElement}
 */
class IconSharpFormatIndentDecreaseElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatIndentDecreaseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-indent-decrease';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatIndentDecreaseElement.is, IconSharpFormatIndentDecreaseElement);

export default IconSharpFormatIndentDecreaseElement;
