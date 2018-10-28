import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReplyElement
 * @class IconSharpReplyElement
 * @extends {AoflElement}
 */
class IconSharpReplyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpReplyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-reply';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReplyElement.is, IconSharpReplyElement);

export default IconSharpReplyElement;
