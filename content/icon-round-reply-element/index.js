import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReplyElement
 * @class IconRoundReplyElement
 * @extends {AoflElement}
 */
class IconRoundReplyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundReplyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-reply';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReplyElement.is, IconRoundReplyElement);

export default IconRoundReplyElement;
