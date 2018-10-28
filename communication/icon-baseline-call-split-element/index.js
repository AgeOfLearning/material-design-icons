import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCallSplitElement
 * @class IconBaselineCallSplitElement
 * @extends {AoflElement}
 */
class IconBaselineCallSplitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCallSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-call-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCallSplitElement.is, IconBaselineCallSplitElement);

export default IconBaselineCallSplitElement;
