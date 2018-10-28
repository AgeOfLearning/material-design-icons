import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatBoldElement
 * @class IconBaselineFormatBoldElement
 * @extends {AoflElement}
 */
class IconBaselineFormatBoldElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatBoldElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-bold';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatBoldElement.is, IconBaselineFormatBoldElement);

export default IconBaselineFormatBoldElement;
