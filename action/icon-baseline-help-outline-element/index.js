import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHelpOutlineElement
 * @class IconBaselineHelpOutlineElement
 * @extends {AoflElement}
 */
class IconBaselineHelpOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHelpOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-help-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHelpOutlineElement.is, IconBaselineHelpOutlineElement);

export default IconBaselineHelpOutlineElement;
