import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpForumElement
 * @class IconSharpForumElement
 * @extends {AoflElement}
 */
class IconSharpForumElement extends AoflElement {
  /**
   * Creates an instance of IconSharpForumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-forum';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpForumElement.is, IconSharpForumElement);

export default IconSharpForumElement;
