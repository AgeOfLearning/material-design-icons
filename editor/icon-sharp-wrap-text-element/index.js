import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWrapTextElement
 * @class IconSharpWrapTextElement
 * @extends {AoflElement}
 */
class IconSharpWrapTextElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWrapTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wrap-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWrapTextElement.is, IconSharpWrapTextElement);

export default IconSharpWrapTextElement;
