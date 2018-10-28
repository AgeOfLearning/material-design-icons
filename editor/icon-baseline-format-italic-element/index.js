import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatItalicElement
 * @class IconBaselineFormatItalicElement
 * @extends {AoflElement}
 */
class IconBaselineFormatItalicElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatItalicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-italic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatItalicElement.is, IconBaselineFormatItalicElement);

export default IconBaselineFormatItalicElement;
