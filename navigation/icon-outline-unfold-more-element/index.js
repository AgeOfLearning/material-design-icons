import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineUnfoldMoreElement
 * @class IconOutlineUnfoldMoreElement
 * @extends {AoflElement}
 */
class IconOutlineUnfoldMoreElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineUnfoldMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-unfold-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineUnfoldMoreElement.is, IconOutlineUnfoldMoreElement);

export default IconOutlineUnfoldMoreElement;
