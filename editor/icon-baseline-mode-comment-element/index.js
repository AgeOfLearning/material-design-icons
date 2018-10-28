import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineModeCommentElement
 * @class IconBaselineModeCommentElement
 * @extends {AoflElement}
 */
class IconBaselineModeCommentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineModeCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mode-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineModeCommentElement.is, IconBaselineModeCommentElement);

export default IconBaselineModeCommentElement;
