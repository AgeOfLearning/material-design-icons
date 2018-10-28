import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHighlightElement
 * @class IconSharpHighlightElement
 * @extends {AoflElement}
 */
class IconSharpHighlightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHighlightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-highlight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHighlightElement.is, IconSharpHighlightElement);

export default IconSharpHighlightElement;
