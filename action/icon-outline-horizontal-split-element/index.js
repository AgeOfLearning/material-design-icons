import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHorizontalSplitElement
 * @class IconOutlineHorizontalSplitElement
 * @extends {AoflElement}
 */
class IconOutlineHorizontalSplitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHorizontalSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-horizontal-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHorizontalSplitElement.is, IconOutlineHorizontalSplitElement);

export default IconOutlineHorizontalSplitElement;
