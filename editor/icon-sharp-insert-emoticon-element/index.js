import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInsertEmoticonElement
 * @class IconSharpInsertEmoticonElement
 * @extends {AoflElement}
 */
class IconSharpInsertEmoticonElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInsertEmoticonElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-insert-emoticon';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInsertEmoticonElement.is, IconSharpInsertEmoticonElement);

export default IconSharpInsertEmoticonElement;
