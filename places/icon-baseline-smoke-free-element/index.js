import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSmokeFreeElement
 * @class IconBaselineSmokeFreeElement
 * @extends {AoflElement}
 */
class IconBaselineSmokeFreeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSmokeFreeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-smoke-free';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSmokeFreeElement.is, IconBaselineSmokeFreeElement);

export default IconBaselineSmokeFreeElement;
