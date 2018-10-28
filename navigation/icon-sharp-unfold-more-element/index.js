import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpUnfoldMoreElement
 * @class IconSharpUnfoldMoreElement
 * @extends {AoflElement}
 */
class IconSharpUnfoldMoreElement extends AoflElement {
  /**
   * Creates an instance of IconSharpUnfoldMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-unfold-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpUnfoldMoreElement.is, IconSharpUnfoldMoreElement);

export default IconSharpUnfoldMoreElement;
