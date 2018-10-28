import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNavigateNextElement
 * @class IconSharpNavigateNextElement
 * @extends {AoflElement}
 */
class IconSharpNavigateNextElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNavigateNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-navigate-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNavigateNextElement.is, IconSharpNavigateNextElement);

export default IconSharpNavigateNextElement;
