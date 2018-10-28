import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneForumElement
 * @class IconTwotoneForumElement
 * @extends {AoflElement}
 */
class IconTwotoneForumElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneForumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-forum';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneForumElement.is, IconTwotoneForumElement);

export default IconTwotoneForumElement;
