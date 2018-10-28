import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLanguageElement
 * @class IconOutlineLanguageElement
 * @extends {AoflElement}
 */
class IconOutlineLanguageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLanguageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-language';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLanguageElement.is, IconOutlineLanguageElement);

export default IconOutlineLanguageElement;
