import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHighlightOffElement
 * @class IconSharpHighlightOffElement
 * @extends {AoflElement}
 */
class IconSharpHighlightOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHighlightOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-highlight-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHighlightOffElement.is, IconSharpHighlightOffElement);

export default IconSharpHighlightOffElement;
