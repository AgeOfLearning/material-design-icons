import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBackspaceElement
 * @class IconTwotoneBackspaceElement
 * @extends {AoflElement}
 */
class IconTwotoneBackspaceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBackspaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-backspace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBackspaceElement.is, IconTwotoneBackspaceElement);

export default IconTwotoneBackspaceElement;
