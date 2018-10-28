import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCommentElement
 * @class IconRoundCommentElement
 * @extends {AoflElement}
 */
class IconRoundCommentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCommentElement.is, IconRoundCommentElement);

export default IconRoundCommentElement;
