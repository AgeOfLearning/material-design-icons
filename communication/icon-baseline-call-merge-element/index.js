import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCallMergeElement
 * @class IconBaselineCallMergeElement
 * @extends {AoflElement}
 */
class IconBaselineCallMergeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCallMergeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-call-merge';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCallMergeElement.is, IconBaselineCallMergeElement);

export default IconBaselineCallMergeElement;
