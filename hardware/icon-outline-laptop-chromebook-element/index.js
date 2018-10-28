import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLaptopChromebookElement
 * @class IconOutlineLaptopChromebookElement
 * @extends {AoflElement}
 */
class IconOutlineLaptopChromebookElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLaptopChromebookElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-laptop-chromebook';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLaptopChromebookElement.is, IconOutlineLaptopChromebookElement);

export default IconOutlineLaptopChromebookElement;
