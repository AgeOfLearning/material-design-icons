import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatTextdirectionLToRElement
 * @class IconBaselineFormatTextdirectionLToRElement
 * @extends {AoflElement}
 */
class IconBaselineFormatTextdirectionLToRElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatTextdirectionLToRElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-textdirection-l-to-r';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatTextdirectionLToRElement.is, IconBaselineFormatTextdirectionLToRElement);

export default IconBaselineFormatTextdirectionLToRElement;
