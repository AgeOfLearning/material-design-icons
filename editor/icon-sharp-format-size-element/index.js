import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatSizeElement
 * @class IconSharpFormatSizeElement
 * @extends {AoflElement}
 */
class IconSharpFormatSizeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatSizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-size';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatSizeElement.is, IconSharpFormatSizeElement);

export default IconSharpFormatSizeElement;
