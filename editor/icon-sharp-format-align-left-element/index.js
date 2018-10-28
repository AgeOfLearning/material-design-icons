import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatAlignLeftElement
 * @class IconSharpFormatAlignLeftElement
 * @extends {AoflElement}
 */
class IconSharpFormatAlignLeftElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatAlignLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-align-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatAlignLeftElement.is, IconSharpFormatAlignLeftElement);

export default IconSharpFormatAlignLeftElement;
