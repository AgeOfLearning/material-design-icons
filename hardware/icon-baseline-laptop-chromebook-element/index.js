import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLaptopChromebookElement
 * @class IconBaselineLaptopChromebookElement
 * @extends {AoflElement}
 */
class IconBaselineLaptopChromebookElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLaptopChromebookElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-laptop-chromebook';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLaptopChromebookElement.is, IconBaselineLaptopChromebookElement);

export default IconBaselineLaptopChromebookElement;
