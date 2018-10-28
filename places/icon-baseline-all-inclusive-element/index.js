import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAllInclusiveElement
 * @class IconBaselineAllInclusiveElement
 * @extends {AoflElement}
 */
class IconBaselineAllInclusiveElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAllInclusiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-all-inclusive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAllInclusiveElement.is, IconBaselineAllInclusiveElement);

export default IconBaselineAllInclusiveElement;
