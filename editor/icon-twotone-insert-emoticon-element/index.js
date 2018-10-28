import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInsertEmoticonElement
 * @class IconTwotoneInsertEmoticonElement
 * @extends {AoflElement}
 */
class IconTwotoneInsertEmoticonElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInsertEmoticonElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-insert-emoticon';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInsertEmoticonElement.is, IconTwotoneInsertEmoticonElement);

export default IconTwotoneInsertEmoticonElement;
