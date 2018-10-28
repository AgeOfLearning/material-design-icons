import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineShortTextElement
 * @class IconOutlineShortTextElement
 * @extends {AoflElement}
 */
class IconOutlineShortTextElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineShortTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-short-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineShortTextElement.is, IconOutlineShortTextElement);

export default IconOutlineShortTextElement;
