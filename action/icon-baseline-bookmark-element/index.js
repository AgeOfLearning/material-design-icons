import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBookmarkElement
 * @class IconBaselineBookmarkElement
 * @extends {AoflElement}
 */
class IconBaselineBookmarkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBookmarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bookmark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBookmarkElement.is, IconBaselineBookmarkElement);

export default IconBaselineBookmarkElement;
