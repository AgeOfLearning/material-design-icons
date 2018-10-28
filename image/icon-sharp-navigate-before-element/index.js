import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNavigateBeforeElement
 * @class IconSharpNavigateBeforeElement
 * @extends {AoflElement}
 */
class IconSharpNavigateBeforeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNavigateBeforeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-navigate-before';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNavigateBeforeElement.is, IconSharpNavigateBeforeElement);

export default IconSharpNavigateBeforeElement;
