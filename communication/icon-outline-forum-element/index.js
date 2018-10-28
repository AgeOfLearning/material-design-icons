import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineForumElement
 * @class IconOutlineForumElement
 * @extends {AoflElement}
 */
class IconOutlineForumElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineForumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-forum';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineForumElement.is, IconOutlineForumElement);

export default IconOutlineForumElement;
