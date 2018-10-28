import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatStrikethroughElement
 * @class IconSharpFormatStrikethroughElement
 * @extends {AoflElement}
 */
class IconSharpFormatStrikethroughElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatStrikethroughElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-strikethrough';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatStrikethroughElement.is, IconSharpFormatStrikethroughElement);

export default IconSharpFormatStrikethroughElement;
