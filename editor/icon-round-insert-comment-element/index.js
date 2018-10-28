import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInsertCommentElement
 * @class IconRoundInsertCommentElement
 * @extends {AoflElement}
 */
class IconRoundInsertCommentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInsertCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-insert-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInsertCommentElement.is, IconRoundInsertCommentElement);

export default IconRoundInsertCommentElement;
