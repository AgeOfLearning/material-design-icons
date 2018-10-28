import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderAllElement
 * @class IconSharpBorderAllElement
 * @extends {AoflElement}
 */
class IconSharpBorderAllElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderAllElement.is, IconSharpBorderAllElement);

export default IconSharpBorderAllElement;
