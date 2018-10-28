import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneModeCommentElement
 * @class IconTwotoneModeCommentElement
 * @extends {AoflElement}
 */
class IconTwotoneModeCommentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneModeCommentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mode-comment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneModeCommentElement.is, IconTwotoneModeCommentElement);

export default IconTwotoneModeCommentElement;
