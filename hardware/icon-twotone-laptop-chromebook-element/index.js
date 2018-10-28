import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLaptopChromebookElement
 * @class IconTwotoneLaptopChromebookElement
 * @extends {AoflElement}
 */
class IconTwotoneLaptopChromebookElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLaptopChromebookElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-laptop-chromebook';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLaptopChromebookElement.is, IconTwotoneLaptopChromebookElement);

export default IconTwotoneLaptopChromebookElement;
