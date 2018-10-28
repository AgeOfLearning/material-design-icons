import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVisibilityOffElement
 * @class IconBaselineVisibilityOffElement
 * @extends {AoflElement}
 */
class IconBaselineVisibilityOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVisibilityOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-visibility-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVisibilityOffElement.is, IconBaselineVisibilityOffElement);

export default IconBaselineVisibilityOffElement;
