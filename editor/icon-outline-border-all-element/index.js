import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderAllElement
 * @class IconOutlineBorderAllElement
 * @extends {AoflElement}
 */
class IconOutlineBorderAllElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderAllElement.is, IconOutlineBorderAllElement);

export default IconOutlineBorderAllElement;
