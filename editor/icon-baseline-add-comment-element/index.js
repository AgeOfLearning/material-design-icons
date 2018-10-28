import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddCommentElement
 * @class IconBaselineAddCommentElement
 * @extends {AoflElement}
 */
class IconBaselineAddCommentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddCommentElement.is, IconBaselineAddCommentElement);

export default IconBaselineAddCommentElement;
