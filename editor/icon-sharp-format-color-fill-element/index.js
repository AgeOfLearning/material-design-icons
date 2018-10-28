import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatColorFillElement
 * @class IconSharpFormatColorFillElement
 * @extends {AoflElement}
 */
class IconSharpFormatColorFillElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatColorFillElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-color-fill';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatColorFillElement.is, IconSharpFormatColorFillElement);

export default IconSharpFormatColorFillElement;
