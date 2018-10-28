import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReplyElement
 * @class IconTwotoneReplyElement
 * @extends {AoflElement}
 */
class IconTwotoneReplyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReplyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-reply';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReplyElement.is, IconTwotoneReplyElement);

export default IconTwotoneReplyElement;
