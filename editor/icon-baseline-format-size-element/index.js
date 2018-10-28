import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatSizeElement
 * @class IconBaselineFormatSizeElement
 * @extends {AoflElement}
 */
class IconBaselineFormatSizeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatSizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-size';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatSizeElement.is, IconBaselineFormatSizeElement);

export default IconBaselineFormatSizeElement;
