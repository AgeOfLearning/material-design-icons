import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHelpElement
 * @class IconBaselineHelpElement
 * @extends {AoflElement}
 */
class IconBaselineHelpElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHelpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-help';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHelpElement.is, IconBaselineHelpElement);

export default IconBaselineHelpElement;
