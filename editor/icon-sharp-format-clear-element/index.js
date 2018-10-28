import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatClearElement
 * @class IconSharpFormatClearElement
 * @extends {AoflElement}
 */
class IconSharpFormatClearElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatClearElement.is, IconSharpFormatClearElement);

export default IconSharpFormatClearElement;
