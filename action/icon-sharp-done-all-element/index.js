import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDoneAllElement
 * @class IconSharpDoneAllElement
 * @extends {AoflElement}
 */
class IconSharpDoneAllElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDoneAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-done-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDoneAllElement.is, IconSharpDoneAllElement);

export default IconSharpDoneAllElement;
