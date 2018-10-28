import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVisibilityElement
 * @class IconBaselineVisibilityElement
 * @extends {AoflElement}
 */
class IconBaselineVisibilityElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVisibilityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-visibility';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVisibilityElement.is, IconBaselineVisibilityElement);

export default IconBaselineVisibilityElement;
