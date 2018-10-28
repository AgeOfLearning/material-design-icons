import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatAlignLeftElement
 * @class IconRoundFormatAlignLeftElement
 * @extends {AoflElement}
 */
class IconRoundFormatAlignLeftElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatAlignLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-align-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatAlignLeftElement.is, IconRoundFormatAlignLeftElement);

export default IconRoundFormatAlignLeftElement;
