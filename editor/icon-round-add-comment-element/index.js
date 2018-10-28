import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddCommentElement
 * @class IconRoundAddCommentElement
 * @extends {AoflElement}
 */
class IconRoundAddCommentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddCommentElement.is, IconRoundAddCommentElement);

export default IconRoundAddCommentElement;
