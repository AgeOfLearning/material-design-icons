import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCallSplitElement
 * @class IconOutlineCallSplitElement
 * @extends {AoflElement}
 */
class IconOutlineCallSplitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCallSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-call-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCallSplitElement.is, IconOutlineCallSplitElement);

export default IconOutlineCallSplitElement;
