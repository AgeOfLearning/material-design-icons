import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHorizontalSplitElement
 * @class IconTwotoneHorizontalSplitElement
 * @extends {AoflElement}
 */
class IconTwotoneHorizontalSplitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHorizontalSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-horizontal-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHorizontalSplitElement.is, IconTwotoneHorizontalSplitElement);

export default IconTwotoneHorizontalSplitElement;
