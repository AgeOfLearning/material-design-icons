import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSelectAllElement
 * @class IconSharpSelectAllElement
 * @extends {AoflElement}
 */
class IconSharpSelectAllElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSelectAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-select-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSelectAllElement.is, IconSharpSelectAllElement);

export default IconSharpSelectAllElement;
