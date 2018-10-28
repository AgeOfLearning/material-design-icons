import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatClearElement
 * @class IconBaselineFormatClearElement
 * @extends {AoflElement}
 */
class IconBaselineFormatClearElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatClearElement.is, IconBaselineFormatClearElement);

export default IconBaselineFormatClearElement;
