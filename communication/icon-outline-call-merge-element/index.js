import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCallMergeElement
 * @class IconOutlineCallMergeElement
 * @extends {AoflElement}
 */
class IconOutlineCallMergeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCallMergeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-call-merge';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCallMergeElement.is, IconOutlineCallMergeElement);

export default IconOutlineCallMergeElement;
