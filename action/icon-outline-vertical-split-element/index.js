import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVerticalSplitElement
 * @class IconOutlineVerticalSplitElement
 * @extends {AoflElement}
 */
class IconOutlineVerticalSplitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVerticalSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-vertical-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVerticalSplitElement.is, IconOutlineVerticalSplitElement);

export default IconOutlineVerticalSplitElement;
