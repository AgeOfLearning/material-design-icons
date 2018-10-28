import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatTextdirectionLToRElement
 * @class IconSharpFormatTextdirectionLToRElement
 * @extends {AoflElement}
 */
class IconSharpFormatTextdirectionLToRElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatTextdirectionLToRElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-textdirection-l-to-r';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatTextdirectionLToRElement.is, IconSharpFormatTextdirectionLToRElement);

export default IconSharpFormatTextdirectionLToRElement;
