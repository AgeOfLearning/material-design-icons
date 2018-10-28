import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatAlignJustifyElement
 * @class IconRoundFormatAlignJustifyElement
 * @extends {AoflElement}
 */
class IconRoundFormatAlignJustifyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatAlignJustifyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-align-justify';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatAlignJustifyElement.is, IconRoundFormatAlignJustifyElement);

export default IconRoundFormatAlignJustifyElement;
