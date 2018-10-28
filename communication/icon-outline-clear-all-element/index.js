import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineClearAllElement
 * @class IconOutlineClearAllElement
 * @extends {AoflElement}
 */
class IconOutlineClearAllElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineClearAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-clear-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineClearAllElement.is, IconOutlineClearAllElement);

export default IconOutlineClearAllElement;
