import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTextRotateUpElement
 * @class IconSharpTextRotateUpElement
 * @extends {AoflElement}
 */
class IconSharpTextRotateUpElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTextRotateUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-text-rotate-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTextRotateUpElement.is, IconSharpTextRotateUpElement);

export default IconSharpTextRotateUpElement;
