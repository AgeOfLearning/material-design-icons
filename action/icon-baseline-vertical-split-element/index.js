import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVerticalSplitElement
 * @class IconBaselineVerticalSplitElement
 * @extends {AoflElement}
 */
class IconBaselineVerticalSplitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVerticalSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-vertical-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVerticalSplitElement.is, IconBaselineVerticalSplitElement);

export default IconBaselineVerticalSplitElement;
