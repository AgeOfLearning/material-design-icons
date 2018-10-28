import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCallMergeElement
 * @class IconTwotoneCallMergeElement
 * @extends {AoflElement}
 */
class IconTwotoneCallMergeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCallMergeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-call-merge';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCallMergeElement.is, IconTwotoneCallMergeElement);

export default IconTwotoneCallMergeElement;
