import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReplyElement
 * @class IconOutlineReplyElement
 * @extends {AoflElement}
 */
class IconOutlineReplyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineReplyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-reply';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReplyElement.is, IconOutlineReplyElement);

export default IconOutlineReplyElement;
