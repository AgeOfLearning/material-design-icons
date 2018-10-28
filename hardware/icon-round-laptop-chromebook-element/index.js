import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLaptopChromebookElement
 * @class IconRoundLaptopChromebookElement
 * @extends {AoflElement}
 */
class IconRoundLaptopChromebookElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLaptopChromebookElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-laptop-chromebook';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLaptopChromebookElement.is, IconRoundLaptopChromebookElement);

export default IconRoundLaptopChromebookElement;
