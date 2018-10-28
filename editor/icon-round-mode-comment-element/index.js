import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundModeCommentElement
 * @class IconRoundModeCommentElement
 * @extends {AoflElement}
 */
class IconRoundModeCommentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundModeCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mode-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundModeCommentElement.is, IconRoundModeCommentElement);

export default IconRoundModeCommentElement;
