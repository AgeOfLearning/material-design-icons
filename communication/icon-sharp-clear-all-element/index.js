import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpClearAllElement
 * @class IconSharpClearAllElement
 * @extends {AoflElement}
 */
class IconSharpClearAllElement extends AoflElement {
  /**
   * Creates an instance of IconSharpClearAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-clear-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpClearAllElement.is, IconSharpClearAllElement);

export default IconSharpClearAllElement;
