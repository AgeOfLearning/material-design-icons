import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCollectionsBookmarkElement
 * @class IconBaselineCollectionsBookmarkElement
 * @extends {AoflElement}
 */
class IconBaselineCollectionsBookmarkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCollectionsBookmarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-collections-bookmark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCollectionsBookmarkElement.is, IconBaselineCollectionsBookmarkElement);

export default IconBaselineCollectionsBookmarkElement;
