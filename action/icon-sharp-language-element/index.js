import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLanguageElement
 * @class IconSharpLanguageElement
 * @extends {AoflElement}
 */
class IconSharpLanguageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLanguageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-language';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLanguageElement.is, IconSharpLanguageElement);

export default IconSharpLanguageElement;
