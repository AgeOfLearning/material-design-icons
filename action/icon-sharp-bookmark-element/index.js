import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBookmarkElement
 * @class IconSharpBookmarkElement
 * @extends {AoflElement}
 */
class IconSharpBookmarkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBookmarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bookmark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBookmarkElement.is, IconSharpBookmarkElement);

export default IconSharpBookmarkElement;
