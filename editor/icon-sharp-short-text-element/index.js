import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpShortTextElement
 * @class IconSharpShortTextElement
 * @extends {AoflElement}
 */
class IconSharpShortTextElement extends AoflElement {
  /**
   * Creates an instance of IconSharpShortTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-short-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpShortTextElement.is, IconSharpShortTextElement);

export default IconSharpShortTextElement;
