import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWrapTextElement
 * @class IconOutlineWrapTextElement
 * @extends {AoflElement}
 */
class IconOutlineWrapTextElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWrapTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wrap-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWrapTextElement.is, IconOutlineWrapTextElement);

export default IconOutlineWrapTextElement;
