import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineToysElement
 * @class IconOutlineToysElement
 * @extends {AoflElement}
 */
class IconOutlineToysElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineToysElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-toys';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineToysElement.is, IconOutlineToysElement);

export default IconOutlineToysElement;
