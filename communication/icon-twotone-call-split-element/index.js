import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCallSplitElement
 * @class IconTwotoneCallSplitElement
 * @extends {AoflElement}
 */
class IconTwotoneCallSplitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCallSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-call-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCallSplitElement.is, IconTwotoneCallSplitElement);

export default IconTwotoneCallSplitElement;
