import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatAlignRightElement
 * @class IconRoundFormatAlignRightElement
 * @extends {AoflElement}
 */
class IconRoundFormatAlignRightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatAlignRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-align-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatAlignRightElement.is, IconRoundFormatAlignRightElement);

export default IconRoundFormatAlignRightElement;
