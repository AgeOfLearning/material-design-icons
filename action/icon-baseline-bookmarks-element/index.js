import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBookmarksElement
 * @class IconBaselineBookmarksElement
 * @extends {AoflElement}
 */
class IconBaselineBookmarksElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBookmarksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bookmarks';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBookmarksElement.is, IconBaselineBookmarksElement);

export default IconBaselineBookmarksElement;
