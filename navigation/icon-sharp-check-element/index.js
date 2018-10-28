import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCheckElement
 * @class IconSharpCheckElement
 * @extends {AoflElement}
 */
class IconSharpCheckElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCheckElement.is, IconSharpCheckElement);

export default IconSharpCheckElement;
