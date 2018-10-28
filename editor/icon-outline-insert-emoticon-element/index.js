import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInsertEmoticonElement
 * @class IconOutlineInsertEmoticonElement
 * @extends {AoflElement}
 */
class IconOutlineInsertEmoticonElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInsertEmoticonElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-insert-emoticon';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInsertEmoticonElement.is, IconOutlineInsertEmoticonElement);

export default IconOutlineInsertEmoticonElement;
