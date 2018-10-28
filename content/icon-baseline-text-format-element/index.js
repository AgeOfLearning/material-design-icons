import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTextFormatElement
 * @class IconBaselineTextFormatElement
 * @extends {AoflElement}
 */
class IconBaselineTextFormatElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTextFormatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-text-format';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTextFormatElement.is, IconBaselineTextFormatElement);

export default IconBaselineTextFormatElement;
