import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBookmarkBorderElement
 * @class IconSharpBookmarkBorderElement
 * @extends {AoflElement}
 */
class IconSharpBookmarkBorderElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBookmarkBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bookmark-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBookmarkBorderElement.is, IconSharpBookmarkBorderElement);

export default IconSharpBookmarkBorderElement;
