import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatIndentIncreaseElement
 * @class IconSharpFormatIndentIncreaseElement
 * @extends {AoflElement}
 */
class IconSharpFormatIndentIncreaseElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatIndentIncreaseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-indent-increase';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatIndentIncreaseElement.is, IconSharpFormatIndentIncreaseElement);

export default IconSharpFormatIndentIncreaseElement;
