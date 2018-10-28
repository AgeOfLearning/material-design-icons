import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatItalicElement
 * @class IconRoundFormatItalicElement
 * @extends {AoflElement}
 */
class IconRoundFormatItalicElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatItalicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-italic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatItalicElement.is, IconRoundFormatItalicElement);

export default IconRoundFormatItalicElement;
