import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCommentElement
 * @class IconBaselineCommentElement
 * @extends {AoflElement}
 */
class IconBaselineCommentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCommentElement.is, IconBaselineCommentElement);

export default IconBaselineCommentElement;
