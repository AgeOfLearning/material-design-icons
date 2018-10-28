import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHorizontalSplitElement
 * @class IconBaselineHorizontalSplitElement
 * @extends {AoflElement}
 */
class IconBaselineHorizontalSplitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHorizontalSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-horizontal-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHorizontalSplitElement.is, IconBaselineHorizontalSplitElement);

export default IconBaselineHorizontalSplitElement;
