import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLaptopChromebookElement
 * @class IconSharpLaptopChromebookElement
 * @extends {AoflElement}
 */
class IconSharpLaptopChromebookElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLaptopChromebookElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-laptop-chromebook';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLaptopChromebookElement.is, IconSharpLaptopChromebookElement);

export default IconSharpLaptopChromebookElement;
