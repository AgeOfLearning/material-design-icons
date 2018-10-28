import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatStrikethroughElement
 * @class IconBaselineFormatStrikethroughElement
 * @extends {AoflElement}
 */
class IconBaselineFormatStrikethroughElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatStrikethroughElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-strikethrough';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatStrikethroughElement.is, IconBaselineFormatStrikethroughElement);

export default IconBaselineFormatStrikethroughElement;
