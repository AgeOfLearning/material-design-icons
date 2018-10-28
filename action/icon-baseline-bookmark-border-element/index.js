import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBookmarkBorderElement
 * @class IconBaselineBookmarkBorderElement
 * @extends {AoflElement}
 */
class IconBaselineBookmarkBorderElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBookmarkBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bookmark-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBookmarkBorderElement.is, IconBaselineBookmarkBorderElement);

export default IconBaselineBookmarkBorderElement;
